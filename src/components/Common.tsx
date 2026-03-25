/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, AlertCircle, CheckCircle2, Info, Loader2 } from 'lucide-react';

export function Modal({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] no-print"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[40px] shadow-2xl z-[101] overflow-hidden no-print"
          >
            <div className="p-8 border-b border-black/5 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-xl font-bold">{title}</h3>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Toast({ message, type, isVisible, onClose }: { message: string, type: 'success' | 'error' | 'info', isVisible: boolean, onClose: () => void }) {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className={`fixed bottom-8 left-1/2 z-[200] px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 min-w-[300px] border no-print ${
            type === 'success' ? 'bg-emerald-600 border-emerald-500 text-white' :
            type === 'error' ? 'bg-red-600 border-red-500 text-white' :
            'bg-blue-600 border-blue-500 text-white'
          }`}
        >
          {type === 'success' && <CheckCircle2 size={20} />}
          {type === 'error' && <AlertCircle size={20} />}
          {type === 'info' && <Info size={20} />}
          <span className="font-medium text-sm">{message}</span>
          <button onClick={onClose} className="ms-auto p-1 hover:bg-white/20 rounded-lg transition-colors">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: any }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center p-6">
          <div className="bg-white p-12 rounded-[40px] border border-black/5 shadow-xl max-w-xl text-center">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <X size={40} />
            </div>
            <h1 className="text-2xl font-bold mb-4">Oups ! Une erreur est survenue</h1>
            <p className="text-gray-500 mb-8 leading-relaxed">
              L'application a rencontré un problème inattendu. Veuillez rafraîchir la page ou contacter le support si le problème persiste.
            </p>
            <pre className="text-[10px] bg-gray-50 p-4 rounded-xl text-start overflow-auto max-h-40 mb-8 text-gray-400">
              {this.state.error?.message || String(this.state.error)}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-colors"
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function LoadingSpinner({ size = 32, className = "text-emerald-600" }: { size?: number, className?: string }) {
  return (
    <div className="flex items-center justify-center p-12">
      <Loader2 className={`animate-spin ${className}`} size={size} />
    </div>
  );
}
