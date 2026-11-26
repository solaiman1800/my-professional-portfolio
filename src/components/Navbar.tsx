import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Language, PROFILE } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  lang: Language;
}

const NAV_ITEMS: Array<{ id: string; label: Record<Language, string> }> = [
  { id: 'about', label: { bn: 'আমার সম্পর্কে', en: 'About' } },
  { id: 'education', label: { bn: 'শিক্ষা', en: 'Education' } },
  { id: 'skills', label: { bn: 'দক্ষতা', en: 'Skills' } },
  { id: 'projects', label: { bn: 'প্রজেক্ট', en: 'Projects' } },
  { id: 'contact', label: { bn: 'যোগাযোগ', en: 'Contact' } },
];

export default function Navbar({ theme, onToggleTheme, lang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#060B18]/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="whitespace-nowrap shrink-0 text-base font-bold tracking-tight text-slate-900 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md px-1 py-0.5 dark:text-white dark:hover:text-blue-400 sm:text-lg"
        >
          {PROFILE.name}
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-600 underline-offset-4 transition-colors duration-150 hover:text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-1 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {item.label[lang]}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (Theme toggle) + responsive menu trigger on mobile */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-100/80 px-3.5 text-xs font-semibold text-slate-800 transition-colors duration-150 hover:border-blue-500/40 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 whitespace-nowrap shrink-0 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:bg-slate-800 dark:hover:text-blue-400 cursor-pointer"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <span>Dark</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900 cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-[#060B18]"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-blue-400"
              >
                {item.label[lang]}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
