/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, MessageSquare, TrendingUp, School } from 'lucide-react';

export function FutureVision({ t }: { t: any }) {
  const visions = [
    {
      title: t.visions.digital.title,
      desc: t.visions.digital.desc,
      icon: Lightbulb,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: t.visions.bilingual.title,
      desc: t.visions.bilingual.desc,
      icon: MessageSquare,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: t.visions.technical.title,
      desc: t.visions.technical.desc,
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: t.visions.daaras.title,
      desc: t.visions.daaras.desc,
      icon: School,
      color: "text-teal-600",
      bg: "bg-teal-50"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <header>
        <h2 className="text-4xl font-serif italic mb-4">{t.futureTitle}</h2>
        <p className="text-gray-500 max-w-2xl text-lg">
          {t.futureDesc}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visions.map((v, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-black/5 flex flex-col items-start">
            <div className={`p-4 ${v.bg} ${v.color} rounded-2xl mb-6`}>
              <v.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">{v.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {v.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="relative h-96 rounded-[40px] overflow-hidden group">
        <img 
          src="https://picsum.photos/seed/senegal-education/1200/800" 
          alt={t.futureAlt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
          <h3 className="text-white text-3xl font-bold mb-2">{t.futureHeroTitle}</h3>
          <p className="text-white/70 max-w-lg">
            {t.futureHeroDesc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
