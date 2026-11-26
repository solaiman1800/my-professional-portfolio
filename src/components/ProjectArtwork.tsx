import { ProjectItem } from '../data/portfolioData';

interface ProjectArtworkProps {
  projectId: ProjectItem['id'];
}

export default function ProjectArtwork({ projectId }: ProjectArtworkProps) {
  if (projectId === 'nagar') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50/70 to-slate-200 p-4 dark:from-[#0B1426] dark:via-[#0F1E3A] dark:to-[#070E1C]">
        {/* Architectural Community Interface Preview */}
        <svg
          viewBox="0 0 400 250"
          className="h-full w-full rounded-lg border border-slate-200/80 bg-white shadow-sm dark:border-slate-700/60 dark:bg-[#0D1629]"
          role="img"
          aria-label="Nagar local community platform interface preview"
        >
          {/* Top Navigation Bar */}
          <rect x="0" y="0" width="400" height="34" className="fill-slate-100 dark:fill-[#111D35]" />
          <rect x="16" y="11" width="52" height="12" rx="3" className="fill-blue-600" />
          <rect x="240" y="13" width="36" height="8" rx="2" className="fill-slate-300 dark:fill-slate-600" />
          <rect x="286" y="13" width="36" height="8" rx="2" className="fill-slate-300 dark:fill-slate-600" />
          <rect x="332" y="13" width="48" height="8" rx="2" className="fill-slate-300 dark:fill-slate-600" />

          {/* Left Community Directory Sidebar */}
          <rect x="16" y="48" width="106" height="184" rx="6" className="fill-slate-50 dark:fill-[#101B32]" />
          <rect x="28" y="62" width="64" height="8" rx="2" className="fill-slate-700 dark:fill-slate-300" />
          <rect x="28" y="84" width="82" height="22" rx="4" className="fill-blue-600/15" />
          <rect x="36" y="92" width="54" height="6" rx="2" className="fill-blue-600 dark:fill-blue-400" />
          <rect x="28" y="116" width="82" height="20" rx="4" className="fill-slate-200/70 dark:fill-slate-800" />
          <rect x="28" y="144" width="82" height="20" rx="4" className="fill-slate-200/70 dark:fill-slate-800" />
          <rect x="28" y="172" width="82" height="20" rx="4" className="fill-slate-200/70 dark:fill-slate-800" />

          {/* Main Community Notice Board */}
          <rect x="136" y="48" width="248" height="84" rx="6" className="fill-blue-600" />
          <rect x="152" y="64" width="110" height="10" rx="2" className="fill-white" />
          <rect x="152" y="82" width="180" height="6" rx="2" className="fill-blue-100/80" />
          <rect x="152" y="94" width="140" height="6" rx="2" className="fill-blue-100/70" />
          <rect x="152" y="108" width="70" height="14" rx="3" className="fill-white/95" />

          {/* Two Local Service Cards */}
          <rect x="136" y="144" width="118" height="88" rx="6" className="fill-slate-50 stroke-slate-200 dark:fill-[#101B32] dark:stroke-slate-700/70" strokeWidth="1" />
          <circle cx="156" cy="166" r="10" className="fill-blue-600/20" />
          <rect x="148" y="186" width="74" height="7" rx="2" className="fill-slate-700 dark:fill-slate-200" />
          <rect x="148" y="200" width="90" height="5" rx="2" className="fill-slate-400 dark:fill-slate-500" />
          <rect x="148" y="211" width="66" height="5" rx="2" className="fill-slate-400 dark:fill-slate-500" />

          <rect x="266" y="144" width="118" height="88" rx="6" className="fill-slate-50 stroke-slate-200 dark:fill-[#101B32] dark:stroke-slate-700/70" strokeWidth="1" />
          <circle cx="286" cy="166" r="10" className="fill-blue-600/20" />
          <rect x="278" y="186" width="78" height="7" rx="2" className="fill-slate-700 dark:fill-slate-200" />
          <rect x="278" y="200" width="88" height="5" rx="2" className="fill-slate-400 dark:fill-slate-500" />
          <rect x="278" y="211" width="60" height="5" rx="2" className="fill-slate-400 dark:fill-slate-500" />
        </svg>
      </div>
    );
  }

  if (projectId === 'ai-studio-platform') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-100 via-indigo-50/60 to-slate-200 p-4 dark:from-[#081020] dark:via-[#0E1A36] dark:to-[#060B18]">
        {/* AI Prompt & Automation Studio Workspace */}
        <svg
          viewBox="0 0 400 250"
          className="h-full w-full rounded-lg border border-slate-200/80 bg-white shadow-sm dark:border-slate-700/60 dark:bg-[#0D1629]"
          role="img"
          aria-label="AI Studio Platform workflow interface preview"
        >
          {/* Workspace Header */}
          <rect x="0" y="0" width="400" height="32" className="fill-slate-100 dark:fill-[#111D35]" />
          <rect x="16" y="10" width="96" height="10" rx="2" className="fill-slate-800 dark:fill-slate-200" />
          <rect x="316" y="8" width="68" height="16" rx="4" className="fill-blue-600" />

          {/* Prompt Editor Pane */}
          <rect x="16" y="46" width="218" height="132" rx="6" className="fill-slate-50 stroke-slate-200 dark:fill-[#0A1324] dark:stroke-slate-700/70" strokeWidth="1" />
          <rect x="28" y="58" width="76" height="7" rx="2" className="fill-blue-600 dark:fill-blue-400" />
          <rect x="28" y="76" width="184" height="6" rx="2" className="fill-slate-300 dark:fill-slate-600" />
          <rect x="28" y="88" width="160" height="6" rx="2" className="fill-slate-300 dark:fill-slate-600" />
          <rect x="28" y="100" width="172" height="6" rx="2" className="fill-slate-300 dark:fill-slate-600" />
          <rect x="28" y="118" width="136" height="6" rx="2" className="fill-slate-300 dark:fill-slate-600" />
          <rect x="28" y="148" width="64" height="18" rx="4" className="fill-blue-600" />
          <rect x="100" y="148" width="54" height="18" rx="4" className="fill-slate-200 dark:fill-slate-700" />

          {/* Automation Node Flow Right Pane */}
          <rect x="248" y="46" width="136" height="186" rx="6" className="fill-slate-50 stroke-slate-200 dark:fill-[#101B32] dark:stroke-slate-700/70" strokeWidth="1" />
          <rect x="264" y="62" width="104" height="30" rx="5" className="fill-white stroke-blue-500/50 dark:fill-[#0B1426]" strokeWidth="1" />
          <rect x="274" y="73" width="62" height="7" rx="2" className="fill-slate-700 dark:fill-slate-200" />

          <line x1="316" y1="92" x2="316" y2="114" className="stroke-blue-500" strokeWidth="1.5" />

          <rect x="264" y="114" width="104" height="34" rx="5" className="fill-blue-600" />
          <rect x="274" y="127" width="74" height="7" rx="2" className="fill-white" />

          <line x1="316" y1="148" x2="316" y2="170" className="stroke-blue-500" strokeWidth="1.5" />

          <rect x="264" y="170" width="104" height="34" rx="5" className="fill-white stroke-slate-300 dark:fill-[#0B1426] dark:stroke-slate-700" strokeWidth="1" />
          <rect x="274" y="183" width="68" height="7" rx="2" className="fill-slate-700 dark:fill-slate-200" />

          {/* Bottom Output Strip */}
          <rect x="16" y="190" width="218" height="42" rx="6" className="fill-slate-100 dark:fill-[#111D35]" />
          <rect x="28" y="202" width="90" height="6" rx="2" className="fill-blue-600 dark:fill-blue-400" />
          <rect x="28" y="214" width="160" height="5" rx="2" className="fill-slate-400 dark:fill-slate-500" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-100 via-sky-50/70 to-slate-200 p-4 dark:from-[#0A1324] dark:via-[#0F1F3D] dark:to-[#060B18]">
      {/* QuickBite Online Food Ordering Interface */}
      <svg
        viewBox="0 0 400 250"
        className="h-full w-full rounded-lg border border-slate-200/80 bg-white shadow-sm dark:border-slate-700/60 dark:bg-[#0D1629]"
        role="img"
        aria-label="QuickBite online food ordering concept interface preview"
      >
        {/* Top Bar */}
        <rect x="0" y="0" width="400" height="34" className="fill-slate-100 dark:fill-[#111D35]" />
        <rect x="16" y="11" width="64" height="12" rx="3" className="fill-blue-600" />
        <rect x="180" y="10" width="118" height="14" rx="4" className="fill-white stroke-slate-200 dark:fill-[#0A1324] dark:stroke-slate-700" strokeWidth="1" />
        <rect x="312" y="10" width="72" height="14" rx="4" className="fill-slate-800 dark:fill-blue-600" />

        {/* Menu Grid (3 Dish Cards) */}
        <rect x="16" y="48" width="114" height="114" rx="6" className="fill-slate-50 stroke-slate-200 dark:fill-[#101B32] dark:stroke-slate-700/70" strokeWidth="1" />
        <rect x="24" y="56" width="98" height="54" rx="4" className="fill-blue-600/15" />
        <circle cx="73" cy="83" r="18" className="fill-blue-600/30" />
        <rect x="24" y="120" width="68" height="7" rx="2" className="fill-slate-800 dark:fill-slate-200" />
        <rect x="24" y="134" width="40" height="6" rx="2" className="fill-blue-600 dark:fill-blue-400" />
        <rect x="92" y="132" width="30" height="16" rx="4" className="fill-blue-600" />

        <rect x="142" y="48" width="114" height="114" rx="6" className="fill-slate-50 stroke-slate-200 dark:fill-[#101B32] dark:stroke-slate-700/70" strokeWidth="1" />
        <rect x="150" y="56" width="98" height="54" rx="4" className="fill-sky-500/15" />
        <circle cx="199" cy="83" r="18" className="fill-sky-500/30" />
        <rect x="150" y="120" width="72" height="7" rx="2" className="fill-slate-800 dark:fill-slate-200" />
        <rect x="150" y="134" width="40" height="6" rx="2" className="fill-blue-600 dark:fill-blue-400" />
        <rect x="218" y="132" width="30" height="16" rx="4" className="fill-blue-600" />

        {/* Order Summary Drawer */}
        <rect x="268" y="48" width="116" height="184" rx="6" className="fill-slate-50 stroke-slate-200 dark:fill-[#101B32] dark:stroke-slate-700/70" strokeWidth="1" />
        <rect x="280" y="62" width="68" height="8" rx="2" className="fill-slate-800 dark:fill-white" />
        <rect x="280" y="84" width="92" height="22" rx="4" className="fill-white dark:fill-[#0B1426]" />
        <rect x="280" y="114" width="92" height="22" rx="4" className="fill-white dark:fill-[#0B1426]" />
        <line x1="280" y1="154" x2="372" y2="154" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="1" />
        <rect x="280" y="166" width="44" height="7" rx="2" className="fill-slate-500 dark:fill-slate-400" />
        <rect x="336" y="166" width="36" height="7" rx="2" className="fill-slate-800 dark:fill-white" />
        <rect x="280" y="192" width="92" height="24" rx="5" className="fill-blue-600" />

        {/* Bottom Category Bar */}
        <rect x="16" y="176" width="240" height="56" rx="6" className="fill-slate-100 dark:fill-[#111D35]" />
        <rect x="28" y="190" width="96" height="7" rx="2" className="fill-slate-700 dark:fill-slate-200" />
        <rect x="28" y="205" width="176" height="6" rx="2" className="fill-slate-400 dark:fill-slate-500" />
      </svg>
    </div>
  );
}
