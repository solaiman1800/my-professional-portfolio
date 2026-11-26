import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Eye, FolderOpen, Info, X, Check } from 'lucide-react';
import { Language, ProjectItem, PROJECTS } from '../data/portfolioData';
import ProjectArtwork from './ProjectArtwork';

interface ProjectsSectionProps {
  lang: Language;
}

type ModalState = {
  project: ProjectItem;
  mode: 'details' | 'demo';
} | null;

export default function ProjectsSection({ lang }: ProjectsSectionProps) {
  const [modal, setModal] = useState<ModalState>(null);

  useEffect(() => {
    if (!modal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modal]);

  return (
    <section
      id="projects"
      className="border-b border-slate-200/80 bg-slate-50 py-16 transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#060B18] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {lang === 'bn' ? 'নির্বাচিত কাজ' : 'My Projects'}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            {lang === 'bn'
              ? 'আমার তৈরি ও চলমান ডিজিটাল প্রজেক্টসমূহ'
              : 'Featured & Ongoing Digital Projects'}
          </h2>
        </div>

        {/* 3-Column Project Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.38, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-200 hover:border-blue-500/50 dark:border-slate-800 dark:bg-[#0D1629] dark:hover:border-blue-500/50"
            >
              {/* Project Visual Preview */}
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
                <ProjectArtwork projectId={project.id} />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Quiet Unboxed Metadata Line (Zero Pills) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="text-blue-600 dark:text-blue-400">
                      {project.category[lang]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.status[lang]}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {project.name}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.summary[lang]}
                  </p>

                  {/* Technologies Used — Clean Typographic List */}
                  <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-800/80">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {lang === 'bn' ? 'ব্যবহৃত প্রযুক্তি:' : 'Technologies:'}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {project.technologies.join(' · ')}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setModal({ project, mode: 'details' })}
                    className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-900 transition-colors hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 whitespace-nowrap shrink-0 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-slate-800 dark:hover:text-blue-400 cursor-pointer"
                  >
                    <FolderOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>View Project</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModal({ project, mode: 'demo' })}
                    className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Accessible Project Details / Live Demo Preview Modal */}
      {modal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#0D1629]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4 dark:border-slate-800">
              <div>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  {modal.mode === 'demo'
                    ? lang === 'bn'
                      ? 'লাইভ ডেমো প্রিভিউ'
                      : 'Interactive Concept Preview'
                    : modal.project.category[lang]}
                </p>
                <h3
                  id="project-modal-title"
                  className="text-xl font-bold text-slate-950 dark:text-white"
                >
                  {modal.project.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setModal(null)}
                aria-label="Close modal"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-h-[80vh] overflow-y-auto p-6">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                <ProjectArtwork projectId={modal.project.id} />
              </div>

              {modal.mode === 'details' ? (
                <div className="mt-6 space-y-5">
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                      {lang === 'bn' ? 'প্রজেক্ট বিবরণ' : 'Project Overview'}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {modal.project.details[lang]}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                      {lang === 'bn' ? 'মূল বৈশিষ্ট্য' : 'Key Highlights'}
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {modal.project.highlights[lang].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-[#091022]">
                    <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                      <div className="space-y-1">
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {lang === 'bn'
                            ? 'কাস্টমাইজযোগ্য প্রজেক্ট লিংক (Placeholder)'
                            : 'Customizable Project Link (Placeholder)'}
                        </p>
                        <p className="font-mono-num break-all text-slate-500 dark:text-slate-400">
                          {modal.project.projectUrlPlaceholder}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-blue-500/30 bg-blue-50/70 p-4 dark:border-blue-500/30 dark:bg-blue-950/30">
                    <div className="flex items-start gap-3">
                      <ExternalLink
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      />
                      <div className="space-y-1.5 text-sm">
                        <p className="font-semibold text-slate-950 dark:text-white">
                          {lang === 'bn'
                            ? 'লাইভ ডেমো লিংক প্লেসহোল্ডার'
                            : 'Live Demo Link Placeholder'}
                        </p>
                        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {lang === 'bn'
                            ? 'এই প্রজেক্টের ডেপ্লয়েড লাইভ URL পরবর্তীতে সরাসরি পরিবর্তন করা যাবে। নিচে প্রজেক্টের ইন্টারফেস প্রিভিউ এবং প্লেসহোল্ডার ঠিকানা দেখানো হয়েছে:'
                            : 'Replace this placeholder URL with the live deployment link when published. Interface concept preview and placeholder address:'}
                        </p>
                        <p className="font-mono-num pt-1 text-xs font-medium text-blue-700 dark:text-blue-300 break-all">
                          {modal.project.liveDemoPlaceholder}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {modal.project.technologies.join(' · ')}
                </p>
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer"
                >
                  {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
