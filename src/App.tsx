import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Language } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const [lang, setLang] = useState<Language>('bn');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#060B18] dark:text-slate-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} lang={lang} />
      <main>
        <Hero lang={lang} onChangeLang={setLang} />
        <AboutSection lang={lang} />
        <EducationSection lang={lang} />
        <SkillsSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ServicesSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
