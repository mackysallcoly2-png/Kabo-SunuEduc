/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, FileText, Award, TrendingUp, Languages, ExternalLink } from 'lucide-react';

export function ResourcesSection({ t }: { t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header>
        <h2 className="text-4xl font-serif italic mb-4">{t.resourcesTitle}</h2>
        <p className="text-gray-500 max-w-2xl text-lg">
          {t.resourcesDesc}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.educationalResources.map((category: any) => (
          <div key={category.category} className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <div className="w-1.5 h-8 bg-emerald-600 rounded-full" />
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((item: any) => (
                <div key={item.title} className="bg-white p-6 rounded-3xl border border-black/5 hover:border-emerald-200 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-emerald-50 transition-colors">
                      {category.category === 'Guides Pédagogiques' && <BookOpen className="text-emerald-600" size={20} />}
                      {category.category === 'Manuels Agréés' && <FileText className="text-blue-600" size={20} />}
                      {category.category === 'Évaluations & Examens' && <Award className="text-amber-600" size={20} />}
                      {category.category === 'Politiques & Vision (PSE)' && <TrendingUp className="text-indigo-600" size={20} />}
                      {category.category === 'Langues & Culture' && <Languages className="text-pink-600" size={20} />}
                    </div>
                    <ExternalLink className="text-gray-300 group-hover:text-emerald-600" size={16} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-gray-100 text-[10px] font-bold text-gray-400 rounded uppercase tracking-widest">
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
