/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  LayoutDashboard, 
  MessageSquare, 
  TrendingUp, 
  Info, 
  Menu, 
  X,
  GraduationCap,
  FileText,
  Loader2,
  LogIn,
  LogOut,
  History
} from 'lucide-react';
import { TRANSLATIONS } from './translations';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { 
  auth, 
  db, 
  googleProvider, 
  signInWithPopup, 
  onAuthStateChanged, 
  signOut,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  addDoc,
  deleteDoc,
  serverTimestamp,
  handleFirestoreError,
  OperationType
} from './firebase';

import { AIAssistant } from './components/AIAssistant';
import { Dashboard } from './components/Dashboard';
import { CurriculumExplorer } from './components/CurriculumExplorer';
import { ResourcesSection } from './components/ResourcesSection';
import { FutureVision } from './components/FutureVision';
import { AboutSection } from './components/AboutSection';
import { MyFichesSection } from './components/MyFichesSection';
import { ErrorBoundary } from './components/Common';

type Tab = 'dashboard' | 'curriculum' | 'resources' | 'assistant' | 'future' | 'about' | 'my-fiches';
type Language = 'fr' | 'ar' | 'en';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('fr');
  const [user, setUser] = useState<any>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  
  const lastSaveAttempt = useRef<{ content: string, fileName: string } | null>(null);

  const t = TRANSLATIONS[language];
  const isRTL = language === 'ar';

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const origin = event.origin;
      if (!origin.endsWith('.run.app') && !origin.includes('localhost')) {
        return;
      }
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        if (lastSaveAttempt.current) {
          handleSaveToDrive(lastSaveAttempt.current.content, lastSaveAttempt.current.fileName);
          lastSaveAttempt.current = null;
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Sync user to Firestore
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (!userSnap.exists()) {
            await setDoc(userRef, {
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
              role: 'teacher',
              createdAt: serverTimestamp()
            });
          }
        } catch (error) {
          handleFirestoreError(error, OperationType.WRITE, `users/${currentUser.uid}`);
        }
      } else {
        setUser(null);
      }
      setIsAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setActiveTab('dashboard');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleExportWord = async (content: string) => {
    try {
      const doc = new Document({
        sections: [{
          properties: {
            page: {
              margin: { top: 720, right: 720, bottom: 720, left: 720 }
            }
          },
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Kabo SunuÉduc - Fiche de Préparation",
                  bold: true,
                  size: 32,
                }),
              ],
              spacing: { after: 400 }
            }),
            ...content.split('\n').map(line => new Paragraph({
              children: [new TextRun({ text: line, size: 22 })],
              spacing: { after: 120 }
            })),
          ],
        }],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, `fiche_pedagogique_${Date.now()}.docx`);
    } catch (error) {
      console.error('Word export error:', error);
    }
  };

  const handleSaveToDrive = async (content: string, fileName: string) => {
    try {
      const response = await fetch('/api/drive/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, fileName }),
      });

      if (response.status === 401) {
        lastSaveAttempt.current = { content, fileName };
        const authUrlResponse = await fetch('/api/auth/url');
        const { url } = await authUrlResponse.json();
        window.open(url, 'oauth_popup', 'width=600,height=700');
        return false;
      }

      if (!response.ok) throw new Error('Upload failed');
      
      const data = await response.json();
      console.log('Drive link:', data.link);
      return true;
    } catch (error) {
      console.error('Drive save error:', error);
      return false;
    }
  };

  const handleSaveToFirestore = async (content: string, level: string, domain: string, object: string) => {
    if (!user) {
      handleLogin();
      return;
    }
    try {
      const fichesRef = collection(db, 'fiches');
      await addDoc(fichesRef, {
        uid: user.uid,
        level,
        domain,
        object: object || "Leçon sans titre",
        content,
        language,
        createdAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'fiches');
      return false;
    }
  };

  const navItems = [
    { id: 'dashboard', label: t.dashboard, icon: LayoutDashboard },
    { id: 'curriculum', label: t.curriculum, icon: BookOpen },
    { id: 'resources', label: t.resources, icon: FileText },
    ...(user ? [{ id: 'my-fiches', label: t.myFiches, icon: History }] : []),
    { id: 'assistant', label: t.assistant, icon: MessageSquare },
    { id: 'future', label: t.future, icon: TrendingUp },
    { id: 'about', label: t.about, icon: Info },
  ];

  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#F5F5F0] text-[#141414] font-sans selection:bg-emerald-200 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Sidebar / Navigation */}
      <nav className="fixed top-0 start-0 h-full w-64 bg-white border-e border-black/5 hidden lg:flex flex-col z-50 no-print">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
              <GraduationCap size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Kabo SunuÉduc</h1>
          </div>

          <div className="flex gap-2 mb-6 p-1 bg-gray-50 rounded-xl">
            {(['fr', 'ar', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all ${
                  language === lang 
                    ? 'bg-white text-emerald-700 shadow-sm' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-emerald-50 text-emerald-700 font-medium' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-auto p-8 border-t border-black/5 space-y-4">
          {user ? (
            <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-2xl">
              <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full border border-black/5" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">{user.displayName}</p>
                <button onClick={handleLogout} className="text-[10px] text-red-500 hover:underline flex items-center gap-1">
                  <LogOut size={10} />
                  {t.logout}
                </button>
              </div>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all"
            >
              <LogIn size={18} />
              {t.login}
            </button>
          )}
          <div className="bg-emerald-900 text-white p-4 rounded-2xl">
            <p className="text-xs opacity-70 mb-1">{t.expertise}</p>
            <p className="text-sm font-medium">{t.system}</p>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white border-b border-black/5 p-4 flex items-center justify-between z-50 no-print">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
            <GraduationCap size={18} />
          </div>
          <h1 className="text-lg font-bold">Kabo SunuÉduc</h1>
        </div>
        <div className="flex items-center gap-4">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="text-xs font-bold bg-gray-50 border-none rounded-lg px-2 py-1 focus:ring-0"
          >
            <option value="fr">FR</option>
            <option value="ar">AR</option>
            <option value="en">EN</option>
          </select>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-[65px] left-0 w-full bg-white border-b border-black/5 z-40 p-4 shadow-xl no-print"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as Tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${
                    activeTab === item.id 
                      ? 'bg-emerald-50 text-emerald-700 font-medium' 
                      : 'text-gray-500'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ms-64 pt-20 lg:pt-0 min-h-screen print:ms-0 print:pt-0">
        <div className="max-w-6xl mx-auto p-6 lg:p-12 print:p-0 print:max-w-full">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && <Dashboard key="dashboard" onStartFiche={() => setActiveTab('assistant')} t={t} />}
            {activeTab === 'curriculum' && <CurriculumExplorer key="curriculum" t={t} language={language} />}
            {activeTab === 'resources' && <ResourcesSection key="resources" t={t} />}
            {activeTab === 'my-fiches' && user && (
              <MyFichesSection 
                key="my-fiches" 
                t={t} 
                user={user} 
                onExportWord={handleExportWord}
                onSaveToDrive={handleSaveToDrive}
              />
            )}
            {activeTab === 'assistant' && (
              <AIAssistant 
                key="assistant" 
                lang={language} 
                onSaveToDrive={handleSaveToDrive}
                onSaveToFirestore={async (fiche) => {
                  return await handleSaveToFirestore(fiche.content, fiche.level, fiche.domain, fiche.object);
                }}
              />
            )}
            {activeTab === 'future' && <FutureVision key="future" t={t} />}
            {activeTab === 'about' && <AboutSection key="about" t={t} />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
