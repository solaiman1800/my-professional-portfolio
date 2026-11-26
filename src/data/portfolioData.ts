export type Language = 'bn' | 'en';

export type SkillCategory = 'all' | 'ai' | 'web' | 'productivity';

export interface SkillItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, 'all'>;
  description: Record<Language, string>;
  iconKey:
    | 'sparkles'
    | 'terminal'
    | 'code'
    | 'palette'
    | 'braces'
    | 'cpu'
    | 'layers'
    | 'fileText'
    | 'table'
    | 'presentation'
    | 'workflow';
}

export interface ProjectItem {
  id: 'nagar' | 'ai-studio-platform' | 'quickbite';
  name: string;
  category: Record<Language, string>;
  status: Record<Language, string>;
  summary: Record<Language, string>;
  details: Record<Language, string>;
  highlights: Record<Language, string[]>;
  technologies: string[];
  projectUrlPlaceholder: string;
  liveDemoPlaceholder: string;
}

export interface ServiceItem {
  index: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
}

export interface EducationEntry {
  id: string;
  year: Record<Language, string>;
  degree: Record<Language, string>;
  institution: Record<Language, string>;
  location: Record<Language, string>;
  description: Record<Language, string>;
}

export const PROFILE = {
  name: 'Md. Solaiman Hossain',
  roleLine: 'AI Enthusiast | Web Development Learner | Creative Digital Creator',
  photoPath: '/assets/aistudio/solaiman-profile-picture_9fcd12ec.png',
  location: {
    bn: 'সিরাজগঞ্জ, বাংলাদেশ',
    en: 'Sirajganj, Bangladesh',
  },
  institution: {
    bn: 'ইসলামিয়া সরকারি কলেজ, সিরাজগঞ্জ',
    en: 'Islamia Government College, Sirajganj',
  },
  degree: 'Bachelor of Social Science (B.S.S.)',
  sessionYear: {
    bn: '২০২৩',
    en: '2023',
  },
  contactPlaceholders: {
    email: 'your.email@example.com',
    phone: '+880 1XXX-XXXXXX',
    facebook: 'https://facebook.com/placeholder-profile',
    linkedin: 'https://linkedin.com/in/placeholder-profile',
    github: 'https://github.com/placeholder-username',
    x: 'https://x.com/placeholder-handle',
  },
  copyright: '© 2026 Md. Solaiman Hossain. All Rights Reserved.',
};

export const SKILLS: SkillItem[] = [
  {
    id: 'ai-tools',
    name: 'Artificial Intelligence Tools',
    category: 'ai',
    iconKey: 'sparkles',
    description: {
      bn: 'গবেষণা, কনটেন্ট তৈরি এবং আধুনিক ডিজিটাল সমস্যা সমাধানে কার্যকর AI টুলসের ব্যবহার।',
      en: 'Applying modern AI tools for research, content creation, and practical problem-solving.',
    },
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'ai',
    iconKey: 'terminal',
    description: {
      bn: 'নির্ভুল ও মানসম্মত আউটপুট পাওয়ার জন্য সুগঠিত এবং কৌশলগত প্রম্পট ডিজাইন।',
      en: 'Designing structured prompts to achieve accurate, consistent, and high-utility outputs.',
    },
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'web',
    iconKey: 'code',
    description: {
      bn: 'পরিচ্ছন্ন, সেমান্টিক এবং SEO-বান্ধব ওয়েব পেজ কাঠামো তৈরি।',
      en: 'Building clean, semantic, and SEO-friendly web page structures.',
    },
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'web',
    iconKey: 'palette',
    description: {
      bn: 'সব ডিভাইসের জন্য আধুনিক, রেসপনসিভ এবং দৃষ্টিনন্দন লেআউট ডিজাইন।',
      en: 'Crafting modern, responsive, and visually balanced layouts across devices.',
    },
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'web',
    iconKey: 'braces',
    description: {
      bn: 'ওয়েবসাইটে ডাইনামিক ইন্টারঅ্যাক্টিভিটি এবং কার্যকর ইউজার ফ্লো তৈরি।',
      en: 'Adding dynamic interactivity and responsive user flows to web interfaces.',
    },
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    category: 'ai',
    iconKey: 'cpu',
    description: {
      bn: 'AI প্রোটোটাইপিং, ওয়ার্কফ্লো পরীক্ষা এবং আধুনিক ডিজিটাল প্ল্যাটফর্ম নির্মাণ।',
      en: 'Prototyping AI workflows and building modern interactive digital experiences.',
    },
  },
  {
    id: 'google-stitch',
    name: 'Google Stitch',
    category: 'ai',
    iconKey: 'layers',
    description: {
      bn: 'দ্রুত UI/UX কনসেপ্ট ভিজ্যুয়ালাইজেশন এবং ডিজাইন আইডিয়া কাঠামোবদ্ধ করা।',
      en: 'Structuring UI/UX design concepts and rapid interface exploration.',
    },
  },
  {
    id: 'ms-word',
    name: 'Microsoft Word',
    category: 'productivity',
    iconKey: 'fileText',
    description: {
      bn: 'পেশাদার ডকুমেন্ট, রিপোর্ট ও ফরমাল প্রেজেন্টেশন ম্যাটেরিয়াল প্রস্তুতকরণ।',
      en: 'Preparing structured documents, reports, and formal written materials.',
    },
  },
  {
    id: 'ms-excel',
    name: 'Microsoft Excel',
    category: 'productivity',
    iconKey: 'table',
    description: {
      bn: 'ডেটা সংগঠিত করা, হিসাব বিশ্লেষণ এবং পরিপাটি স্প্রেডশিট ব্যবস্থাপনা।',
      en: 'Organizing data, tracking records, and building structured spreadsheets.',
    },
  },
  {
    id: 'ms-powerpoint',
    name: 'Microsoft PowerPoint',
    category: 'productivity',
    iconKey: 'presentation',
    description: {
      bn: 'আইডিয়া ও প্রজেক্ট উপস্থাপনার জন্য পরিষ্কার ও আকর্ষণীয় স্লাইড ডেক তৈরি।',
      en: 'Designing clear and engaging slide decks for ideas and project presentations.',
    },
  },
  {
    id: 'automation-tools',
    name: 'Automation Tools',
    category: 'ai',
    iconKey: 'workflow',
    description: {
      bn: 'পুনরাবৃত্তিমূলক ডিজিটাল কাজ সহজ ও দ্রুত করার জন্য স্মার্ট অটোমেশন সেটআপ।',
      en: 'Streamlining repetitive digital workflows with smart automation tools.',
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nagar',
    name: 'Nagar',
    category: {
      bn: 'কমিউনিটি ওয়েবসাইট',
      en: 'Community Platform',
    },
    status: {
      bn: 'চলমান প্রজেক্ট',
      en: 'Active Project',
    },
    summary: {
      bn: 'স্থানীয় এলাকার মানুষের জন্য একটি কমিউনিটি ওয়েবসাইট, যেখানে এলাকার তথ্য, সেবা ও যোগাযোগ সহজে পাওয়া যায়।',
      en: 'A local community website designed to connect residents with neighborhood updates, essential services, and local communication.',
    },
    details: {
      bn: 'Nagar প্রজেক্টের মূল লক্ষ্য হলো স্থানীয় এলাকার মানুষদের জন্য একটি নির্ভরযোগ্য ডিজিটাল কেন্দ্র তৈরি করা। এর মাধ্যমে এলাকার জরুরি তথ্য, কমিউনিটি ঘোষণা, স্থানীয় সেবা এবং মানুষের পারস্পরিক সংযোগকে একটি সহজ ইন্টারফেসে নিয়ে আসার কাজ চলছে।',
      en: 'Nagar focuses on building a dependable digital hub for local residents. It brings community notices, essential neighborhood directory details, and local interaction into a single accessible web interface.',
    },
    highlights: {
      bn: [
        'স্থানীয় এলাকার জরুরি নোটিশ ও তথ্য বোর্ড',
        'সহজ ও মোবাইল-বান্ধব কমিউনিটি নেভিগেশন',
        'এলাকার মানুষ ও সেবার মধ্যে দ্রুত সংযোগের কাঠামো',
      ],
      en: [
        'Local neighborhood notice and community board',
        'Clean, mobile-friendly navigation structure',
        'Direct discovery of local services and updates',
      ],
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    projectUrlPlaceholder: 'https://github.com/placeholder-username/nagar-community',
    liveDemoPlaceholder: 'https://nagar-community.example.com',
  },
  {
    id: 'ai-studio-platform',
    name: 'AI Studio Platform',
    category: {
      bn: 'AI ডিজিটাল প্ল্যাটফর্ম',
      en: 'AI Digital Platform',
    },
    status: {
      bn: 'চলমান প্রজেক্ট',
      en: 'In Development',
    },
    summary: {
      bn: 'AI-ভিত্তিক একটি ডিজিটাল প্ল্যাটফর্ম, যা স্মার্ট প্রম্পট, ক্রিয়েটিভ ওয়ার্কফ্লো এবং অটোমেশনকে একত্রিত করে।',
      en: 'An AI-driven digital platform bringing together structured prompts, creative workflows, and practical automation.',
    },
    details: {
      bn: 'AI Studio Platform-এ কৃত্রিম বুদ্ধিমত্তা ও আধুনিক ওয়েব প্রযুক্তির সমন্বয়ে দৈনন্দিন সৃজনশীল কাজ, প্রম্পট ব্যবস্থাপনা এবং ডিজিটাল অটোমেশন সহজ করার ধারণা বাস্তবায়ন করা হচ্ছে।',
      en: 'AI Studio Platform explores how modern web interfaces and artificial intelligence tools can work together to simplify creative production, prompt organization, and digital task automation.',
    },
    highlights: {
      bn: [
        'স্ট্রাকচার্ড প্রম্পট ইঞ্জিনিয়ারিং ওয়ার্কস্পেস',
        'AI টুলস এবং অটোমেশন ফ্লো ইন্টিগ্রেশন কনসেপ্ট',
        'পরিচ্ছন্ন ও ব্যবহারবান্ধব ডার্ক ও লাইট ইন্টারফেস',
      ],
      en: [
        'Structured prompt engineering workspace layout',
        'Workflow concepts uniting AI tools and automation',
        'Clean, accessible light and dark interface architecture',
      ],
    },
    technologies: ['Google AI Studio', 'Prompt Engineering', 'JavaScript', 'Automation Tools'],
    projectUrlPlaceholder: 'https://github.com/placeholder-username/ai-studio-platform',
    liveDemoPlaceholder: 'https://ai-studio-platform.example.com',
  },
  {
    id: 'quickbite',
    name: 'QuickBite',
    category: {
      bn: 'ফুড অর্ডারিং কনসেপ্ট',
      en: 'Food Ordering Concept',
    },
    status: {
      bn: 'ওয়েব কনসেপ্ট',
      en: 'Concept Design',
    },
    summary: {
      bn: 'অনলাইন খাবার অর্ডার করার ওয়েবসাইটের ধারণা, যেখানে দ্রুত মেনু ব্রাউজিং এবং সহজ অর্ডার অভিজ্ঞতাকে গুরুত্ব দেওয়া হয়েছে।',
      en: 'An online food ordering website concept centered on fast menu discovery, visual clarity, and a frictionless checkout flow.',
    },
    details: {
      bn: 'QuickBite হলো একটি আধুনিক অনলাইন ফুড অর্ডারিং ওয়েব কনসেপ্ট। এখানে ব্যবহারকারীরা যেন খুব অল্প ধাপে পছন্দের খাবার খুঁজে নিতে পারেন এবং মোবাইল বা ডেস্কটপ থেকে অনায়াসে অর্ডার প্রক্রিয়া সম্পন্ন করতে পারেন—সেই ইউজার এক্সপেরিয়েন্স ডিজাইন করা হয়েছে।',
      en: 'QuickBite is a modern online food ordering concept crafted to minimize friction between browsing dishes and placing an order across both mobile and desktop viewports.',
    },
    highlights: {
      bn: [
        'ক্যাটাগরিভিত্তিক দ্রুত মেনু ব্রাউজিং ইন্টারফেস',
        'পরিষ্কার কার্ট ও অর্ডার সারাংশ লেআউট',
        'মোবাইল-ফার্স্ট রেসপনসিভ ইউজার এক্সপেরিয়েন্স',
      ],
      en: [
        'Category-driven fast menu browsing interface',
        'Clear cart and order summary layout',
        'Mobile-first responsive user experience',
      ],
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'Google Stitch'],
    projectUrlPlaceholder: 'https://github.com/placeholder-username/quickbite-concept',
    liveDemoPlaceholder: 'https://quickbite-concept.example.com',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    index: '01.',
    title: {
      bn: 'AI ভিত্তিক ডিজিটাল সলিউশন',
      en: 'AI-Based Digital Solutions',
    },
    description: {
      bn: 'আধুনিক কৃত্রিম বুদ্ধিমত্তা ও প্রম্পট ইঞ্জিনিয়ারিং ব্যবহার করে ব্যক্তিগত এবং ব্যবসার কাজের জন্য কার্যকর ডিজিটাল সমাধান তৈরি।',
      en: 'Building practical digital solutions powered by modern AI tools and structured prompt engineering.',
    },
  },
  {
    index: '02.',
    title: {
      bn: 'ওয়েবসাইট ডিজাইন',
      en: 'Website Design',
    },
    description: {
      bn: 'পরিপাটি লেআউট, আধুনিক টাইপোগ্রাফি এবং সব ডিভাইসে মানানসই রেসপনসিভ ওয়েব ডিজাইন ও ফ্রন্টএন্ড কাঠামো।',
      en: 'Clean layouts, refined typography, and responsive frontend experiences tailored for every screen size.',
    },
  },
  {
    index: '03.',
    title: {
      bn: 'ক্রিয়েটিভ ডিজিটাল প্রজেক্ট',
      en: 'Creative Digital Projects',
    },
    description: {
      bn: 'নতুন ধারণা থেকে শুরু করে ভিজ্যুয়াল কনসেপ্ট এবং বাস্তবমুখী ডিজিটাল প্রজেক্ট পরিকল্পনা ও রূপায়ণ।',
      en: 'Turning original ideas into structured visual concepts and thoughtful digital experiences.',
    },
  },
  {
    index: '04.',
    title: {
      bn: 'অটোমেশন সলিউশন',
      en: 'Automation Solutions',
    },
    description: {
      bn: 'দৈনন্দিন পুনরাবৃত্তিমূলক ডিজিটাল কাজ সহজ, নির্ভুল ও সময়সাশ্রয়ী করার জন্য স্মার্ট ওয়ার্কফ্লো অটোমেশন।',
      en: 'Designing smart workflows that save time and streamline repetitive digital tasks.',
    },
  },
  {
    index: '05.',
    title: {
      bn: 'আধুনিক প্রযুক্তিভিত্তিক কাজ',
      en: 'Modern Technology-Driven Work',
    },
    description: {
      bn: 'সময়ের সাথে তাল মিলিয়ে নতুন AI ও ওয়েব প্রযুক্তি শেখা এবং বাস্তব সমস্যা সমাধানে তার সৃজনশীল প্রয়োগ।',
      en: 'Continuously adopting emerging web and AI tools to solve real-world problems creatively.',
    },
  },
];

export const EDUCATION_TIMELINE: EducationEntry[] = [
  {
    id: 'bss-2023',
    year: {
      bn: '২০২৩',
      en: '2023',
    },
    degree: {
      bn: 'Bachelor of Social Science (B.S.S.)',
      en: 'Bachelor of Social Science (B.S.S.)',
    },
    institution: {
      bn: 'ইসলামিয়া সরকারি কলেজ, সিরাজগঞ্জ',
      en: 'Islamia Government College, Sirajganj',
    },
    location: {
      bn: 'সিরাজগঞ্জ, বাংলাদেশ',
      en: 'Sirajganj, Bangladesh',
    },
    description: {
      bn: 'সামাজিক বিজ্ঞান বিষয়ে স্নাতক পর্যায়ের পড়াশোনার পাশাপাশি সমাজ, মানুষ ও বাস্তব জীবনের সমস্যা বোঝার দৃষ্টিভঙ্গি তৈরি—যা কমিউনিটি ও ডিজিটাল প্রজেক্ট ভাবনায় সহায়তা করে।',
      en: 'Undergraduate studies in Social Science, developing analytical insight into communities and human needs that directly informs user-focused digital projects.',
    },
  },
  {
    id: 'continuous-tech',
    year: {
      bn: 'চলমান',
      en: 'Ongoing',
    },
    degree: {
      bn: 'স্ব-উদ্যোগে ওয়েব ডেভেলপমেন্ট ও AI শিক্ষা',
      en: 'Self-Directed Web & AI Learning',
    },
    institution: {
      bn: 'AI Tools, Prompt Engineering & Frontend Web',
      en: 'AI Tools, Prompt Engineering & Frontend Web',
    },
    location: {
      bn: 'ব্যবহারিক অনুশীলন ও প্রজেক্ট নির্মাণ',
      en: 'Hands-on Practice & Project Building',
    },
    description: {
      bn: 'HTML, CSS, JavaScript, Google AI Studio, Google Stitch এবং অটোমেশন টুলস ব্যবহার করে নিয়মিত নতুন প্রজেক্ট তৈরি ও দক্ষতা উন্নয়ন।',
      en: 'Continuously building real web concepts and sharpening skills across HTML, CSS, JavaScript, Google AI Studio, Google Stitch, and workflow automation.',
    },
  },
];
