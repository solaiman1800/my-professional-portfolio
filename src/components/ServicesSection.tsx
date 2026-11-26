import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Language, SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  lang: Language;
}

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="services"
      className="border-b border-slate-200/80 bg-white py-16 transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#091022] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {lang === 'bn' ? 'আমার সেবাসমূহ' : 'What I Do'}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              {lang === 'bn'
                ? 'যেসব ক্ষেত্রে আমি কাজ ও সহায়তা করি'
                : 'Digital Services & Creative Focus Areas'}
            </h2>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 whitespace-nowrap shrink-0 cursor-pointer md:self-auto"
          >
            <span>{lang === 'bn' ? 'প্রজেক্ট নিয়ে কথা বলুন' : 'Discuss a Project'}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Clean Numbered Editorial List (01. - 05.) */}
        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-3 py-6 transition-colors hover:bg-slate-50/70 dark:hover:bg-[#0D1629]/70 sm:px-4 md:grid-cols-12 md:items-center md:gap-8"
            >
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="font-mono-num text-sm font-bold text-blue-600 dark:text-blue-400">
                  {service.index}
                </span>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {service.title[lang]}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:col-span-7">
                {service.description[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
