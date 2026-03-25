/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Printer, FileText } from 'lucide-react';
import { Language } from '../types';

export function CurriculumExplorer({ t, language }: { t: any, language: Language }) {
  const [selectedLevel, setSelectedLevel] = useState<'elementary' | 'middle' | 'secondary' | 'literacy'>('elementary');
  const [selectedStage, setSelectedStage] = useState(t.cebStructure.stages[2].id);
  const [schoolType, setSchoolType] = useState<'classique' | 'franco-arabe'>('classique');
  
  const currentStage = t.cebStructure.stages.find((s: any) => s.id === selectedStage);
  const isRTL = language === 'ar';

  const filteredStages = t.cebStructure.stages.filter((s: any) => {
    if (selectedLevel === 'elementary') return ['preschool', 'etape1', 'etape2', 'etape3'].includes(s.id);
    return s.id === selectedLevel;
  });

  useEffect(() => {
    if (!filteredStages.find((s: any) => s.id === selectedStage)) {
      setSelectedStage(filteredStages[0]?.id || '');
    }
  }, [selectedLevel]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-serif italic mb-4">{t.curriculumTitle}</h2>
          <p className="text-gray-500 max-w-2xl text-lg">
            {t.curriculumDesc}
          </p>
        </div>
        
        <div className={`flex flex-col gap-4 ${isRTL ? 'items-start' : 'items-end'}`}>
          <div className="flex bg-white p-1.5 rounded-2xl border border-black/5 self-start overflow-x-auto max-w-full">
            {['elementary', 'middle', 'secondary', 'literacy'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedLevel === level 
                    ? 'bg-emerald-900 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {t.educationLevels.find((l: any) => l.id === level)?.name || level}
              </button>
            ))}
          </div>

          <div className="flex bg-white p-1.5 rounded-2xl border border-black/5 self-start overflow-x-auto max-w-full">
            {filteredStages.map((stage: any) => (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedStage === stage.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {stage.name}
              </button>
            ))}
          </div>
          
          {selectedLevel === 'elementary' && (
            <div className="flex bg-white p-1.5 rounded-2xl border border-black/5 self-start">
              <button
                onClick={() => setSchoolType('classique')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  schoolType === 'classique' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {t.classicElementaire}
              </button>
              <button
                onClick={() => setSchoolType('franco-arabe')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  schoolType === 'franco-arabe' 
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-200' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {t.francoArabeModel}
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="space-y-8">
        {t.cebStructure.domains
          .filter((domain: any) => {
            if (selectedLevel === 'elementary') {
              return (!domain.type || domain.type === 'both' || domain.type === schoolType);
            }
            return domain.type === selectedLevel;
          })
          .map((domain: any) => (
          <div key={domain.id} className="bg-white rounded-3xl border border-black/5 overflow-hidden">
            <div className={`p-6 ${domain.color} text-white`}>
              <h3 className="text-xl font-bold">{domain.name}</h3>
              <p className="text-white/80 text-sm mt-1">{domain.description}</p>
            </div>
            <div className="p-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{t.competenciesBase} - {currentStage?.name}</h4>
              <div className="grid grid-cols-1 gap-8">
                {domain.competencies
                  .filter((c: any) => c.stage === selectedStage)
                  .map((cb: any) => (
                    <div key={cb.title} className="p-8 bg-gray-50 rounded-[32px] border border-black/5 flex flex-col gap-6">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${domain.color}`} />
                          <span className="text-lg font-bold text-emerald-900">{cb.title}</span>
                        </div>
                        <button 
                          onClick={() => window.print()}
                          className="flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-xl text-xs font-bold text-gray-500 hover:text-emerald-600 hover:border-emerald-200 transition-all"
                        >
                          <Printer size={14} />
                          {t.exportFiche}
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed italic">{cb.desc}</p>
                      
                      {cb.content && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                          <div className="bg-white p-5 rounded-2xl border border-black/5">
                            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">Savoirs</div>
                            <ul className="space-y-2">
                              {cb.content.savoirs.map((s: string, i: number) => (
                                <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                                  <span className="text-blue-400 mt-1">•</span> {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-white p-5 rounded-2xl border border-black/5">
                            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3">Savoir-faire</div>
                            <ul className="space-y-2">
                              {cb.content.savoirFaire.map((s: string, i: number) => (
                                <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                                  <span className="text-emerald-400 mt-1">•</span> {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-white p-5 rounded-2xl border border-black/5">
                            <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-3">Savoir-être</div>
                            <ul className="space-y-2">
                              {cb.content.savoirEtre.map((s: string, i: number) => (
                                <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                                  <span className="text-amber-400 mt-1">•</span> {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {cb.paliers && (
                        <div className="mt-2">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Paliers d'intégration</div>
                          <div className="grid grid-cols-1 gap-3">
                            {cb.paliers.map((palier: string, pIdx: number) => (
                              <div key={pIdx} className="p-4 bg-white rounded-xl border border-black/5 text-xs text-gray-600 leading-relaxed">
                                {palier}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-12 rounded-[40px] border border-black/5">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <FileText className="text-emerald-600" />
          {t.modelFiche}
        </h3>
        <div className="font-mono text-xs text-gray-500 space-y-4 bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-200">
          <p>{t.ficheModel.header}</p>
          <p>{t.ficheModel.framework}</p>
          <div className="h-px bg-gray-200 my-4" />
          <p>{t.ficheModel.step1}</p>
          <p>{t.ficheModel.step2}</p>
          <p>{t.ficheModel.step3}</p>
          <p>{t.ficheModel.step4}</p>
          <p>{t.ficheModel.step5}</p>
          <p>{t.ficheModel.step6}</p>
          <p>{t.ficheModel.step7}</p>
        </div>
      </div>
    </motion.div>
  );
}
