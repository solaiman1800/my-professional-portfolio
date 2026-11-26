import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { Language, PROFILE } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
}

const FOOTER_LINKS: Array<{ id: string; label: Record<Language, string> }> = [
  { id: 'home', label: { bn: 'হোম', en: 'Home' } },
  { id: 'about', label: { bn: 'আমার সম্পর্কে', en: 'About' } },
  { id: 'education', label: { bn: 'শিক্ষা', en: 'Education' } },
  { id: 'skills', label: { bn: 'দক্ষতা', en: 'Skills' } },
  { id: 'projects', label: { bn: 'প্রজেক্ট', en: 'Projects' } },
  { id: 'services', label: { bn: 'সেবাসমূহ', en: 'Services' } },
  { id: 'contact', label: { bn: 'যোগাযোগ', en: 'Contact' } },
];

export default function Footer({ lang }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 transition-colors duration-200 dark:border-slate-800 dark:bg-[#050914]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Identity & Short Bio */}
          <div className="md:col-span-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="text-lg font-bold tracking-tight text-slate-950 dark:text-white"
            >
              {PROFILE.name}
            </a>
            <p className="mt-2 text-xs font-medium text-blue-600 dark:text-blue-400">
              {PROFILE.roleLine}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {lang === 'bn'
                ? 'সিরাজগঞ্জ, বাংলাদেশ থেকে AI টুলস, আধুনিক ওয়েব ডিজাইন এবং সৃজনশীল ডিজিটাল সলিউশন নিয়ে কাজ ও অনুশীলন করছি।'
                : 'Exploring artificial intelligence tools, modern web development, and creative digital solutions from Sirajganj, Bangladesh.'}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-slate-950 dark:text-white">
              {lang === 'bn' ? 'গুরুত্বপূর্ণ লিংক' : 'Quick Links'}
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {FOOTER_LINKS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.id);
                    }}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {item.label[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-slate-950 dark:text-white">
              {lang === 'bn' ? 'সোশ্যাল মিডিয়া' : 'Connect'}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                aria-label="Facebook placeholder link"
                title="Facebook (Placeholder)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                aria-label="LinkedIn placeholder link"
                title="LinkedIn (Placeholder)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                aria-label="GitHub placeholder link"
                title="GitHub (Placeholder)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                aria-label="Contact section"
                title="Contact"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center">
          <p>{PROFILE.copyright}</p>
          <p>{PROFILE.location[lang]}</p>
        </div>
      </div>
    </footer>
  );
}
