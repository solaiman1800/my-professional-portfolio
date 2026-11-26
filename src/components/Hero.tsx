import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Mail, MapPin, User } from 'lucide-react';
import { Language, PROFILE } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

export default function Hero({ lang, onChangeLang }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200/80 bg-slate-50 pt-10 pb-14 transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#060B18] sm:pt-14 sm:pb-20"
    >
      {/* Subtle Architectural Radial Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.10),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.16),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Utility Strip: Unboxed Location + Language Switcher */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 sm:text-sm">
            <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span>{PROFILE.location[lang]}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'bn' ? 'পার্সোনাল পোর্টফোলিও' : 'Personal Portfolio'}</span>
          </div>

          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-900"
          >
            <button
              type="button"
              onClick={() => onChangeLang('bn')}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'bn'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Balanced Split-Column Hero */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Primary Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
              {lang === 'bn' ? 'স্বাগতম — ডিজিটাল পোর্টফোলিও' : 'Welcome — Digital Portfolio'}
            </p>

            <h1 className="text-balance text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-slate-950 dark:text-white">
              {PROFILE.name}
            </h1>

            <p className="mt-4 text-base font-semibold leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg">
              {PROFILE.roleLine}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-[1.7] text-slate-600 dark:text-slate-300">
              {lang === 'bn'
                ? 'আমি কৃত্রিম বুদ্ধিমত্তা, আধুনিক ওয়েব ডেভেলপমেন্ট এবং সৃজনশীল ডিজিটাল সলিউশন নিয়ে কাজ করতে ভালোবাসি। নতুন প্রযুক্তি শেখা, স্মার্ট অটোমেশন তৈরি করা এবং মানুষের প্রয়োজনভিত্তিক আধুনিক ওয়েব প্রজেক্ট নির্মাণই আমার মূল আগ্রহ।'
                : 'I am passionate about artificial intelligence, modern web development, and creative digital solutions. Learning emerging technologies, building smart automation workflows, and crafting user-focused web concepts define my creative journey.'}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#060B18] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-150 hover:border-blue-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:text-blue-400 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Studio Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:col-span-5"
          >
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 transition-colors dark:border-slate-800 dark:bg-[#0D1629]">
              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-200 lg:h-full lg:min-h-[340px]">
                {!imgError ? (
                  <img
                    src={PROFILE.photoPath}
                    alt={`${PROFILE.name} — ${PROFILE.roleLine}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200 p-6 text-center dark:from-slate-800 dark:to-slate-900">
                    <User className="h-12 w-12 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {PROFILE.name}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 px-1 pt-1 text-xs text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white truncate">
                  {PROFILE.name}
                </span>
                <span className="whitespace-nowrap shrink-0 text-slate-500 dark:text-slate-400">
                  {PROFILE.location[lang]}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Key Facts Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-slate-200/80 pt-8 sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-800/80">
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {lang === 'bn' ? 'অবস্থান' : 'Location'}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
              {PROFILE.location[lang]}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {lang === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Education'}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
              {PROFILE.degree}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {lang === 'bn' ? 'শিক্ষাপ্রতিষ্ঠান' : 'Institution'}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
              {PROFILE.institution[lang]} ({PROFILE.sessionYear[lang]})
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {lang === 'bn' ? 'মূল আগ্রহ' : 'Core Focus'}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
              {lang === 'bn'
                ? 'AI টুলস · ওয়েব ডিজাইন · অটোমেশন'
                : 'AI Tools · Web Design · Automation'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
