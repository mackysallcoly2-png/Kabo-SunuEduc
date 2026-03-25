/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, Trash2, FileDown, Copy, Check, Printer, Cloud } from 'lucide-react';
import { collection, db, query, where, onSnapshot, deleteDoc, doc, handleFirestoreError, OperationType } from '../firebase';
import { LoadingSpinner, Modal } from './Common';
import Markdown from 'react-markdown';

export function MyFichesSection({ t, user, onExportWord, onSaveToDrive }: { t: any, user: any, onExportWord: (content: string) => void, onSaveToDrive: (content: string, fileName: string) => void }) {
  const [fiches, setFiches] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFiche, setSelectedFiche] = useState<any | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [ficheToDelete, setFicheToDelete] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'fiches'), where('uid', '==', user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fichesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFiches(fichesData.sort((a: any, b: any) => b.createdAt?.seconds - a.createdAt?.seconds));
      setIsLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'fiches');
    });
    return () => unsubscribe();
  }, [user.uid]);

  const handleDeleteClick = (id: string) => {
    setFicheToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!ficheToDelete) return;
    try {
      await deleteDoc(doc(db, 'fiches', ficheToDelete));
      if (selectedFiche?.id === ficheToDelete) setSelectedFiche(null);
      setIsDeleteModalOpen(false);
      setFicheToDelete(null);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `fiches/${ficheToDelete}`);
    }
  };

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <header>
        <h2 className="text-4xl font-serif italic mb-4">{t.myFiches}</h2>
      </header>

      {isLoading ? (
        <LoadingSpinner />
      ) : fiches.length === 0 ? (
        <div className="bg-white p-12 rounded-[40px] border border-black/5 text-center">
          <FileText size={48} className="mx-auto text-gray-200 mb-4" />
          <p className="text-gray-500">{t.noFiches}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {fiches.map((fiche) => (
              <button
                key={fiche.id}
                onClick={() => setSelectedFiche(fiche)}
                className={`w-full text-start p-6 rounded-3xl border transition-all ${
                  selectedFiche?.id === fiche.id 
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' 
                    : 'bg-white border-black/5 text-gray-800 hover:border-emerald-200'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedFiche?.id === fiche.id ? 'text-emerald-100' : 'text-emerald-600'}`}>
                    {fiche.level}
                  </span>
                  <span className="text-[10px] opacity-50">
                    {fiche.createdAt?.toDate().toLocaleDateString()}
                  </span>
                </div>
                <h4 className="font-bold text-sm mb-1 line-clamp-1">{fiche.object}</h4>
                <p className={`text-xs opacity-70 line-clamp-1`}>{fiche.domain}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            {selectedFiche ? (
              <div className="bg-white rounded-[40px] border border-black/5 shadow-sm overflow-hidden flex flex-col h-[70vh]">
                <div className="p-6 border-b border-black/5 flex justify-between items-center bg-gray-50/50">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-lg truncate">{selectedFiche.object}</h3>
                    <p className="text-xs text-gray-500">{selectedFiche.level} - {selectedFiche.domain}</p>
                  </div>
                  <div className="flex gap-2 ms-4">
                    <button 
                      onClick={() => handleCopy(selectedFiche.content, selectedFiche.id)}
                      className="p-2 bg-white rounded-xl border border-black/5 text-gray-400 hover:text-emerald-600 transition-colors"
                      title={t.copy}
                    >
                      {copiedId === selectedFiche.id ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
                    </button>
                    <button 
                      onClick={() => onExportWord(selectedFiche.content)}
                      className="p-2 bg-white rounded-xl border border-black/5 text-gray-400 hover:text-emerald-600 transition-colors"
                      title={t.exportWord}
                    >
                      <FileDown size={18} />
                    </button>
                    <button 
                      onClick={() => onSaveToDrive(selectedFiche.content, `fiche_${selectedFiche.level}_${selectedFiche.domain}`)}
                      className="p-2 bg-white rounded-xl border border-black/5 text-gray-400 hover:text-blue-600 transition-colors"
                      title={t.saveDrive}
                    >
                      <Cloud size={18} />
                    </button>
                    <button 
                      onClick={() => window.print()}
                      className="p-2 bg-white rounded-xl border border-black/5 text-gray-400 hover:text-emerald-600 transition-colors"
                      title={t.print}
                    >
                      <Printer size={18} />
                    </button>
                    <button 
                      onClick={() => handleDeleteClick(selectedFiche.id)}
                      className="p-2 bg-white rounded-xl border border-black/5 text-gray-400 hover:text-red-500 transition-colors"
                      title={t.delete}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-8 markdown-body text-sm leading-relaxed">
                  <Markdown>{selectedFiche.content}</Markdown>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center bg-gray-50/50 rounded-[40px] border border-dashed border-gray-200">
                <p className="text-gray-400 text-sm italic">{t.selectFiche}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title={t.confirmDeleteTitle || "Supprimer la fiche"}
      >
        <div className="text-center">
          <p className="text-gray-600 mb-8">{t.confirmDeleteDesc || "Êtes-vous sûr de vouloir supprimer cette fiche ? Cette action est irréversible."}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
            >
              {t.cancel || "Annuler"}
            </button>
            <button
              onClick={confirmDelete}
              className="flex-1 px-6 py-3 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-colors"
            >
              {t.delete || "Supprimer"}
            </button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
