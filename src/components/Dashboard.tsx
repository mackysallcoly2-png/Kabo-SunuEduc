/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { School, FileText } from 'lucide-react';

export function Dashboard({ onStartFiche, t }: { onStartFiche: () => void, t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header>
        <h2 className="text-4xl font-serif italic mb-4">{t.panorama}</h2>
        <p className="text-gray-500 max-w-2xl text-lg">
          {t.panoramaDesc}
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-black/5">
          <div className="text-3xl font-bold text-emerald-600 mb-1">{t.stats.studentsValue}</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">{t.stats.students}</div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5">
          <div className="text-3xl font-bold text-emerald-600 mb-1">{t.stats.schoolingValue}</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">{t.stats.schooling}</div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5">
          <div className="text-3xl font-bold text-emerald-600 mb-1">{t.stats.schoolsValue}</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">{t.stats.schools}</div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5">
          <div className="text-3xl font-bold text-emerald-600 mb-1">{t.stats.examValue}</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">{t.stats.exam}</div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5">
          <div className="text-3xl font-bold text-teal-600 mb-1">{t.stats.francoArabeValue}</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">{t.stats.francoArabe}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.educationLevels.map((level: any) => (
          <div key={level.id} className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-emerald-50 transition-colors">
                <School className="text-gray-400 group-hover:text-emerald-600" size={24} />
              </div>
              {level.exam && (
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">
                  {level.exam}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
            <div className="flex gap-4 text-sm text-gray-400 mb-4">
              <span>{level.age}</span>
              <span>•</span>
              <span>{level.duration}</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {level.description}
            </p>
          </div>
        ))}
      </div>

      <section className="bg-white border border-black/5 p-12 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-3xl font-bold mb-4">{t.generatorTitle}</h3>
          <p className="text-gray-500 max-w-lg leading-relaxed">
            {t.generatorDesc}
          </p>
        </div>
        <button 
          onClick={onStartFiche}
          className="bg-emerald-600 text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-3 whitespace-nowrap"
        >
          <FileText size={24} />
          {t.startFiche}
        </button>
      </section>

      <section className="bg-emerald-900 text-white p-12 rounded-[40px] relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <h3 className="text-3xl font-bold mb-4">{t.paquetTitle}</h3>
          <p className="text-emerald-100/80 mb-8 leading-relaxed">
            {t.paquetDesc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold mb-1">{t.quality}</div>
              <div className="text-xs text-emerald-200/60 uppercase tracking-widest">{t.qualitySub}</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">{t.equity}</div>
              <div className="text-xs text-emerald-200/60 uppercase tracking-widest">{t.equitySub}</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">{t.transparency}</div>
              <div className="text-xs text-emerald-200/60 uppercase tracking-widest">{t.transparencySub}</div>
            </div>
          </div>
        </div>
        <div className="absolute -end-20 -bottom-20 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50" />
      </section>
    </motion.div>
  );
}
