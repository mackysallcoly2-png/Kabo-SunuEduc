import React, { useState, useRef, useEffect } from 'react';
import { Send, Trash2, Copy, Printer, FileText, Save, Sparkles, BookOpen, GraduationCap, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';
import { TRANSLATIONS } from '../translations';
import { ALL_CLASSES, CEB_STRUCTURE, CURRICULUM_DATABASE } from '../constants';
import { Toast } from './Common';
import { ChatMessage, Language } from '../types';

interface AIAssistantProps {
  lang: Language;
  onSaveToDrive: (content: string, title: string) => Promise<boolean>;
  onSaveToFirestore: (fiche: { level: string; domain: string; object: string; content: string; language: Language }) => Promise<boolean>;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ lang, onSaveToDrive, onSaveToFirestore }) => {
  const t = TRANSLATIONS[lang];
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingFiche, setIsGeneratingFiche] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Fiche Generator State
  const [selectedLevel, setSelectedLevel] = useState(ALL_CLASSES[3].id); // Default to CI
  const [selectedDomain, setSelectedDomain] = useState(CEB_STRUCTURE.domains[0].id);
  const [lessonObject, setLessonObject] = useState('');

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Get curriculum context if applicable
      const levelInfo = ALL_CLASSES.find(c => c.id === selectedLevel);
      const domainInfo = CEB_STRUCTURE.domains.find(d => d.id === selectedDomain);
      const curriculumContext = (CURRICULUM_DATABASE as any)[levelInfo?.level || '']?.[selectedLevel]?.[selectedDomain];
      
      const contextPrompt = curriculumContext 
        ? `CONTEXTE CURRICULUM SÉNÉGALAIS (${levelInfo?.name}, ${domainInfo?.name}):
           Objectif d'Apprentissage (OA): ${curriculumContext.oa}
           Objectifs Spécifiques (OS) possibles: ${curriculumContext.os.join(', ')}`
        : '';

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, userMessage].map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: `Tu es un Inspecteur de l'Éducation et de la Formation (IEF) au Sénégal, expert en Curriculum de l'Éducation de Base (CEB) et en Approche Par Compétences (APC). 
          Ta mission est d'accompagner les enseignants dans la conception de leurs fiches pédagogiques et de répondre à leurs questions sur le système éducatif sénégalais (PAQUET-EF, réformes, bilinguisme, franco-arabe).
          Réponds toujours de manière professionnelle, encourageante et précise. Utilise la langue: ${lang === 'fr' ? 'Français' : lang === 'ar' ? 'Arabe' : 'Anglais'}.
          ${contextPrompt}`
        }
      });

      const aiMessage: ChatMessage = { role: 'assistant', content: response.text || '' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setToast({ message: t.errorGemini, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateFiche = async () => {
    if (!lessonObject.trim()) return;
    setIsGeneratingFiche(true);
    
    const levelName = ALL_CLASSES.find(c => c.id === selectedLevel)?.name;
    const domainName = CEB_STRUCTURE.domains.find(d => d.id === selectedDomain)?.name;

    // Get specific curriculum data
    const levelInfo = ALL_CLASSES.find(c => c.id === selectedLevel);
    const curriculumContext = (CURRICULUM_DATABASE as any)[levelInfo?.level || '']?.[selectedLevel]?.[selectedDomain];

    const prompt = `Génère une fiche pédagogique complète pour le système sénégalais (CEB/APC) avec les paramètres suivants:
    - Classe: ${levelName}
    - Domaine/Discipline: ${domainName}
    - Objet de la leçon: ${lessonObject}
    ${curriculumContext ? `- Objectif d'Apprentissage (OA) de référence: ${curriculumContext.oa}` : ''}
    ${curriculumContext ? `- Objectifs Spécifiques (OS) suggérés: ${curriculumContext.os.join(', ')}` : ''}

    La fiche doit inclure:
    1. L'en-tête (École, Classe, Effectif, Date, Durée)
    2. Le cadre de la leçon (Compétence de Base, Palier, OA, OS)
    3. Le tableau des étapes (Mise en situation, Présentation, Analyse/Exploration, Production, Structuration, Évaluation, Réinvestissement)
    4. La trace écrite (Résumé pour les élèves)

    Formatte la réponse en Markdown avec des titres clairs.`;

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: {
          systemInstruction: "Tu es un expert en pédagogie sénégalaise (APC/CEB). Tu génères des fiches de préparation rigoureuses et conformes aux guides du MEN."
        }
      });

      const aiMessage: ChatMessage = { role: 'assistant', content: response.text || '' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Fiche Generation Error:', error);
      setToast({ message: t.errorFiche, type: 'error' });
    } finally {
      setIsGeneratingFiche(false);
    }
  };

  const handleSaveToDriveInternal = async (content: string) => {
    setIsSaving(true);
    const success = await onSaveToDrive(content, `Fiche_${lessonObject || 'Sans_Titre'}`);
    if (success) {
      setToast({ message: t.saveDriveSuccess, type: 'success' });
    } else {
      setToast({ message: t.saveDriveError, type: 'error' });
    }
    setIsSaving(false);
  };

  const handleSaveToFirestoreInternal = async (content: string) => {
    setIsSaving(true);
    const levelName = ALL_CLASSES.find(c => c.id === selectedLevel)?.name || 'Inconnu';
    const domainName = CEB_STRUCTURE.domains.find(d => d.id === selectedDomain)?.name || 'Inconnu';
    
    const success = await onSaveToFirestore({
      level: levelName,
      domain: domainName,
      object: lessonObject || 'Discussion IA',
      content,
      language: lang
    });

    if (success) {
      setToast({ message: t.saveSuccess, type: 'success' });
    } else {
      setToast({ message: t.saveError, type: 'error' });
    }
    setIsSaving(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setToast({ message: 'Copié dans le presse-papier !', type: 'success' });
  };

  const printContent = (content: string) => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`<html><head><title>Impression Fiche</title><style>body{font-family:sans-serif;padding:20px;line-height:1.6;}</style></head><body>${content.replace(/\n/g, '<br>')}</body></html>`);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Fiche Generator Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
            <Sparkles size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{t.generatorTitle}</h2>
            <p className="text-slate-500">{t.generatorDesc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <GraduationCap size={16} /> {t.level}
            </label>
            <select 
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-slate-50 transition-all"
            >
              {ALL_CLASSES.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <BookOpen size={16} /> {t.discipline}
            </label>
            <select 
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-slate-50 transition-all"
            >
              {CEB_STRUCTURE.domains.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <FileText size={16} /> {t.lessonObject}
            </label>
            <input 
              type="text"
              value={lessonObject}
              onChange={(e) => setLessonObject(e.target.value)}
              placeholder={t.placeholderLesson}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-slate-50 transition-all"
            />
          </div>
        </div>

        <button 
          onClick={handleGenerateFiche}
          disabled={isGeneratingFiche || !lessonObject.trim()}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGeneratingFiche ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>{t.loading}</span>
            </div>
          ) : (
            <>
              <Sparkles size={20} />
              <span>{t.generateFiche}</span>
            </>
          )}
        </button>
      </motion.div>

      {/* Chat Interface */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col h-[600px] shadow-inner">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Sparkles size={40} />
              </div>
              <p className="text-slate-600 leading-relaxed">
                {t.assistantIntro}
              </p>
            </div>
          )}

          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] rounded-2xl p-5 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                }`}>
                  <div className="prose prose-sm max-w-none prose-slate">
                    <Markdown>{msg.content}</Markdown>
                  </div>
                  
                  {msg.role === 'assistant' && (
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                      <button 
                        onClick={() => copyToClipboard(msg.content)}
                        className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors flex items-center gap-1 text-xs font-medium"
                        title={t.copy}
                      >
                        <Copy size={14} /> {t.copy}
                      </button>
                      <button 
                        onClick={() => printContent(msg.content)}
                        className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors flex items-center gap-1 text-xs font-medium"
                        title={t.print}
                      >
                        <Printer size={14} /> {t.print}
                      </button>
                      <button 
                        onClick={() => handleSaveToDriveInternal(msg.content)}
                        disabled={isSaving}
                        className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors flex items-center gap-1 text-xs font-medium disabled:opacity-50"
                        title={t.saveDrive}
                      >
                        <Download size={14} /> {t.saveDrive}
                      </button>
                      <button 
                        onClick={() => handleSaveToFirestoreInternal(msg.content)}
                        disabled={isSaving}
                        className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors flex items-center gap-1 text-xs font-medium disabled:opacity-50"
                        title={t.saveToFirestore}
                      >
                        <Save size={14} /> {t.saveToFirestore}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-5 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-6 bg-white border-t border-slate-200">
          <div className="flex gap-3">
            <button 
              onClick={() => setMessages([])}
              className="p-4 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
              title={t.clearChat}
            >
              <Trash2 size={20} />
            </button>
            <div className="flex-1 relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholderChat}
                className="w-full pl-6 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Toast 
        message={toast?.message || ''} 
        type={toast?.type || 'info'} 
        isVisible={!!toast}
        onClose={() => setToast(null)} 
      />
    </div>
  );
};
