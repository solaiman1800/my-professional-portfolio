import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Braces,
  Code2,
  Cpu,
  FileText,
  Layers,
  Palette,
  Presentation,
  Sparkles,
  Table,
  Terminal,
  Workflow,
} from 'lucide-react';
import { Language, SkillCategory, SkillItem, SKILLS } from '../data/portfolioData';

interface SkillsSectionProps {
  lang: Language;
}

const FILTER_TABS: Array<{ id: SkillCategory; label: Record<Language, string> }> = [
  { id: 'all', label: { bn: 'সব দক্ষতা', en: 'All Skills' } },
  { id: 'ai', label: { bn: 'AI ও অটোমেশন', en: 'AI & Automation' } },
  { id: 'web', label: { bn: 'ওয়েব ডেভেলপমেন্ট', en: 'Web Development' } },
  { id: 'productivity', label: { bn: 'অফিস ও প্রেজেন্টেশন', en: 'Productivity' } },
];

const CATEGORY_LABEL: Record<Exclude<SkillCategory, 'all'>, Record<Language, string>> = {
  ai: { bn: 'AI ও অটোমেশন', en: 'AI & Automation' },
  web: { bn: 'ওয়েব টেকনোলজি', en: 'Web Technology' },
  productivity: { bn: 'ডকুমেন্ট ও ডেটা', en: 'Productivity Suite' },
};

function renderSkillIcon(iconKey: SkillItem['iconKey']) {
  const cls = 'h-5 w-5';
  switch (iconKey) {
    case 'sparkles':
      return <Sparkles className={cls} aria-hidden="true" />;
    case 'terminal':
      return <Terminal className={cls} aria-hidden="true" />;
    case 'code':
      return <Code2 className={cls} aria-hidden="true" />;
    case 'palette':
      return <Palette className={cls} aria-hidden="true" />;
    case 'braces':
      return <Braces className={cls} aria-hidden="true" />;
    case 'cpu':
      return <Cpu className={cls} aria-hidden="true" />;
    case 'layers':
      return <Layers className={cls} aria-hidden="true" />;
    case 'fileText':
      return <FileText className={cls} aria-hidden="true" />;
    case 'table':
      return <Table className={cls} aria-hidden="true" />;
    case 'presentation':
      return <Presentation className={cls} aria-hidden="true" />;
    case 'workflow':
      return <Workflow className={cls} aria-hidden="true" />;
  }
}

export default function SkillsSection({ lang }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="border-b border-slate-200/80 bg-white py-16 transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#091022] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {lang === 'bn' ? 'দক্ষতা ও টুলস' : 'My Skills'}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              {lang === 'bn'
                ? 'প্রযুক্তি, ডিজাইন ও অটোমেশনে আমার দক্ষতা'
                : 'Tools & Technologies I Work With'}
            </h2>
          </div>

          {/* Interactive Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-slate-100/80 p-1 dark:border-slate-800 dark:bg-[#0D1629]"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {tab.label[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Card Grid — Strictly NO percentages */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, index) => (
            <motion.article
              key={skill.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-6 transition-colors duration-200 hover:border-blue-500/50 hover:bg-white dark:border-slate-800 dark:bg-[#0D1629] dark:hover:border-blue-500/50 dark:hover:bg-[#101B33]"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-blue-600 transition-colors group-hover:border-blue-500/40 group-hover:bg-blue-600 group-hover:text-white dark:border-slate-700/80 dark:bg-slate-900 dark:text-blue-400 dark:group-hover:border-blue-500 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                    {renderSkillIcon(skill.iconKey)}
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {CATEGORY_LABEL[skill.category][lang]}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-950 dark:text-white">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {skill.description[lang]}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
