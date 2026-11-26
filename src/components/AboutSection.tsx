import { motion } from 'motion/react';
import { Lightbulb, Compass, Cpu } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface AboutSectionProps {
  lang: Language;
}

const PILLARS = [
  {
    icon: Lightbulb,
    title: {
      bn: 'সৃজনশীল চিন্তাভাবনা',
      en: 'Creative Thinking',
    },
    desc: {
      bn: 'যেকোনো ধারণা বা সমস্যাকে কেবল প্রথাগতভাবে না দেখে, ব্যবহারকারীর দৃষ্টিভঙ্গি থেকে সহজ ও কার্যকর ডিজিটাল সমাধান হিসেবে ভাবা।',
      en: 'Approaching challenges from a human-centered perspective to turn raw ideas into clear, intuitive digital experiences.',
    },
  },
  {
    icon: Compass,
    title: {
      bn: 'নতুন প্রযুক্তি শেখার আগ্রহ',
      en: 'Curiosity for New Tech',
    },
    desc: {
      bn: 'কৃত্রিম বুদ্ধিমত্তা, আধুনিক ওয়েব স্ট্যান্ডার্ড এবং প্রম্পট ইঞ্জিনিয়ারিংয়ের দ্রুত পরিবর্তনশীল বিশ্বে নিয়মিত অনুশীলন ও শেখা।',
      en: 'Staying actively engaged with evolving AI platforms, modern web standards, and structured prompt engineering.',
    },
  },
  {
    icon: Cpu,
    title: {
      bn: 'অটোমেশন ও ডিজিটাল সলিউশন',
      en: 'Automation & Digital Solutions',
    },
    desc: {
      bn: 'দৈনন্দিন কাজ ও স্থানীয় প্রয়োজনগুলোকে প্রযুক্তির মাধ্যমে আরও দ্রুত, পরিচ্ছন্ন এবং সহজলভ্য করে তোলা।',
      en: 'Combining web interfaces and automation tools to make everyday digital workflows faster and more reliable.',
    },
  },
];

export default function AboutSection({ lang }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="border-b border-slate-200/80 bg-white py-16 transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#091022] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Section Title Column */}
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {lang === 'bn' ? 'পরিচিতি' : 'About Me'}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              {lang === 'bn'
                ? 'প্রযুক্তি, সৃজনশীলতা এবং বাস্তবমুখী ডিজিটাল সমাধানের সমন্বয়'
                : 'Blending Curiosity, Creativity, and Practical Digital Solutions'}
            </h2>
          </div>

          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-base leading-[1.75] text-slate-600 dark:text-slate-300 lg:col-span-8"
          >
            <p>
              {lang === 'bn'
                ? 'আমি Md. Solaiman Hossain—সিরাজগঞ্জ, বাংলাদেশ থেকে একজন AI Enthusiast, Web Development Learner এবং Creative Digital Creator। প্রযুক্তি কীভাবে মানুষের দৈনন্দিন জীবন ও কাজকে সহজ করতে পারে, তা নিয়ে কাজ করা আমার সবচেয়ে বড় আগ্রহের জায়গা।'
                : 'I am Md. Solaiman Hossain from Sirajganj, Bangladesh — an AI Enthusiast, Web Development Learner, and Creative Digital Creator driven by how technology can simplify everyday life and empower communities.'}
            </p>
            <p>
              {lang === 'bn'
                ? 'বর্তমানে আমি কৃত্রিম বুদ্ধিমত্তা (AI), আধুনিক ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট, ডিজিটাল সলিউশন এবং স্মার্ট অটোমেশন নিয়ে নিয়মিত শিখছি ও বাস্তবভিত্তিক প্রজেক্ট তৈরি করছি। Google AI Studio, Prompt Engineering এবং ওয়েব প্রযুক্তির সমন্বয়ে নতুন আইডিয়া বাস্তবে রূপ দিতে আমি ভালোবাসি।'
                : 'My focus centers on Artificial Intelligence tools, modern website design, digital problem-solving, and workflow automation. I enjoy experimenting with Google AI Studio, Prompt Engineering, and foundational web technologies to turn concepts into usable digital products.'}
            </p>
          </motion.div>
        </div>

        {/* Three Mindset Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title.en}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 transition-colors duration-200 hover:border-blue-500/40 dark:border-slate-800 dark:bg-[#0D1629]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  {pillar.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {pillar.desc[lang]}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
