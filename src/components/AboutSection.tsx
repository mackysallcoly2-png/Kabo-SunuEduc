/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export function AboutSection({ t }: { t: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl space-y-8"
    >
      <h2 className="text-4xl font-serif italic mb-8">{t.aboutTitle}</h2>
      <div className="prose prose-emerald">
        <p className="text-lg text-gray-600 leading-relaxed">
          {t.aboutDesc}
        </p>
        <div className="bg-white p-8 rounded-3xl border border-black/5 mt-8">
          <h4 className="font-bold mb-4">{t.dataSources}</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            {t.sourcesList.map((source: string, i: number) => (
              <li key={i}>• {source}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-gray-400 mt-12 italic">
          {t.aboutFooter}
        </p>
      </div>
    </motion.div>
  );
}
