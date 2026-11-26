import { motion } from 'motion/react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { EDUCATION_TIMELINE, Language } from '../data/portfolioData';

interface EducationSectionProps {
  lang: Language;
}

export default function EducationSection({ lang }: EducationSectionProps) {
  return (
    <section
      id="education"
      className="border-b border-slate-200/80 bg-slate-50 py-16 transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#060B18] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {lang === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Education'}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            {lang === 'bn' ? 'শিক্ষা ও শেখার ধারাবাহিক পথচলা' : 'Academic Background & Continuous Learning'}
          </h2>
        </div>

        {/* Clean Architectural Timeline */}
        <div className="relative mt-12">
          {/* Vertical Timeline Track */}
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-5 w-px bg-slate-200 dark:bg-slate-800 md:left-40"
          />

          <div className="space-y-10">
            {EDUCATION_TIMELINE.map((entry, idx) => {
              const Icon = idx === 0 ? GraduationCap : BookOpen;
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-1 gap-4 pl-14 md:grid-cols-12 md:gap-8 md:pl-0"
                >
                  {/* Year Column */}
                  <div className="md:col-span-3 md:pr-10 md:text-right">
                    <span className="font-mono-num inline-block pt-1 text-base font-bold text-blue-600 dark:text-blue-400">
                      {entry.year[lang]}
                    </span>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {idx === 0
                        ? lang === 'bn'
                          ? 'শিক্ষাবর্ষ'
                          : 'Academic Session'
                        : lang === 'bn'
                          ? 'প্রযুক্তি অনুশীলন'
                          : 'Skill Growth'}
                    </p>
                  </div>

                  {/* Timeline Node */}
                  <div
                    aria-hidden="true"
                    className="absolute top-1.5 left-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-blue-600/30 bg-white text-blue-600 dark:border-blue-400/40 dark:bg-[#0D1629] dark:text-blue-400 md:left-[149px]"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  {/* Card Content */}
                  <div className="rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-blue-500/40 dark:border-slate-800 dark:bg-[#0D1629] md:col-span-9">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                        {entry.degree[lang]}
                      </h3>
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <span>{entry.institution[lang]}</span>
                      <span aria-hidden="true" className="text-slate-400">
                        ·
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {entry.location[lang]}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {entry.description[lang]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
