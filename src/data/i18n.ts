export type Locale = 'en' | 'zh-TW';

export const ui: Record<Locale, Record<string, string>> = {
  en: {
    'nav.about': 'about',
    'nav.experience': 'experience',
    'nav.projects': 'projects',
    'nav.skills': 'skills',
    'nav.education': 'education',
    'nav.publications': 'publications',
    'nav.sideProjects': 'side projects',
    'nav.contact': 'contact',

    'hero.name': 'Tim Hsiao',
    'hero.greeting': '$ whoami',
    'hero.title': 'Software Engineer',
    'hero.subtitle': 'Backend Developer',
    'hero.summary':
      'Focused on backend development and system integration with experience in enterprise-grade ERP, CRM, and automation systems. Specialized in the Laravel ecosystem, also proficient in Python, Vue, and React, with a strong drive for leveraging AI tools to boost development efficiency.',
    'hero.cta': '> explore()',
    'hero.scroll': 'scroll',

    'section.experience': '// Experience',
    'section.projects': '// Projects',
    'section.skills': '// Skills',
    'section.education': '// Education',
    'section.publications': '// Publications & Awards',
    'section.sideProjects': '// Side Projects',
    'section.contact': '// Contact',

    'contact.title': "Let's Connect",
    'contact.desc': 'Open to new opportunities. Feel free to reach out.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.locationValue': 'Taichung, Taiwan',
    'contact.github': 'GitHub',

    'exp.present': 'present',
  },
  'zh-TW': {
    'nav.about': '關於',
    'nav.experience': '經歷',
    'nav.projects': '專案',
    'nav.skills': '技能',
    'nav.education': '學歷',
    'nav.publications': '論文',
    'nav.sideProjects': '作品',
    'nav.contact': '聯絡',

    'hero.name': '蕭偉泓',
    'hero.greeting': '$ whoami',
    'hero.title': '軟體工程師',
    'hero.subtitle': '後端開發',
    'hero.summary':
      '專注於後端開發與系統整合，具備 ERP、CRM、自動化檢測等企業級系統開發經驗。擅長 Laravel 生態系，同時熟悉 Python、Vue、React，善於運用 AI 工具提升開發效率。',
    'hero.cta': '> explore()',
    'hero.scroll': '往下滾動',

    'section.experience': '// 工作經歷',
    'section.projects': '// 專案',
    'section.skills': '// 技能',
    'section.education': '// 學歷',
    'section.publications': '// 論文與獲獎',
    'section.sideProjects': '// Side Projects',
    'section.contact': '// 聯絡方式',

    'contact.title': '聯絡我',
    'contact.desc': '對新機會保持開放，歡迎聯繫。',
    'contact.email': 'Email',
    'contact.phone': '電話',
    'contact.location': '地點',
    'contact.locationValue': '台中市西區',
    'contact.github': 'GitHub',

    'exp.present': '至今',
  },
};

export const experiences: Record<Locale, Array<{
  title: string;
  company: string;
  industry: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}>> = {
  en: [
    {
      title: 'Backend Engineer',
      company: 'Insight Digital Technology Co., Ltd.',
      industry: 'Software Services',
      location: 'Kaohsiung',
      period: '2025/09 — present',
      description: [
        'Developed IDMS (CRM + Project + Knowledge + Financial management platform)',
        'Built Maybow food industry ERP system (recipes, sampling, inspection, approval workflows, cost estimation)',
        'Created ERP UI component library monorepo (40+ components with documentation site)',
        'Introduced AI-assisted development workflows',
      ],
      tags: ['Laravel', 'Alpine.js', 'Tailwind CSS', 'MySQL', 'PHP 8.4'],
    },
    {
      title: 'MIS Engineer',
      company: 'Raitech Precision Tools Co., Ltd.',
      industry: 'Manufacturing',
      location: 'Taichung',
      period: '2024/12 — 2025/09',
      description: [
        'Designed and developed enterprise production scheduling system',
        'Built smart scale management system for material logistics',
        'ERP data synchronization and QR Code integration',
      ],
      tags: ['Vue', 'Laravel', 'React', 'MS SQL'],
    },
    {
      title: 'Software Engineer',
      company: 'Igs Net International Co., Ltd.',
      industry: 'Internet Services',
      location: 'Taichung',
      period: '2024/04 — 2024/11',
      description: [
        'Star City Online system maintenance and feature expansion',
        'Independently designed and developed RESTful APIs',
        'Followed strict code quality standards with focus on readability and modularity',
      ],
      tags: ['PHP', 'Laravel', 'MySQL', 'Redis'],
    },
    {
      title: 'Backend Engineer',
      company: 'Precision Machinery Research & Development Center',
      industry: 'Testing & Inspection',
      location: 'Taichung',
      period: '2023/08 — 2024/03',
      description: [
        'Controlled 10 automated connections via Python + Modbus TCP',
        'Integrated Keyence sensors for real-time data collection',
        'Implemented NG/OK smart detection for automated defect inspection',
      ],
      tags: ['Python', 'PyQt', 'TCP/IP', 'MS SQL'],
    },
    {
      title: 'System Developer',
      company: 'Jillin International Co., Ltd.',
      industry: 'Software Services',
      location: 'Taipei',
      period: '2022/12 — 2023/06',
      description: [
        'Developed ticketing event invoice management system',
        'Designed backend RESTful APIs',
        'Managed MySQL database design and maintenance',
      ],
      tags: ['Laravel', 'Vue.js', 'MySQL'],
    },
  ],
  'zh-TW': [
    {
      title: '後端工程師',
      company: '洞察數位科技有限公司',
      industry: '電腦軟體服務業',
      location: '高雄市前鎮區',
      period: '2025/09 — 至今',
      description: [
        '開發 IDMS 洞察數位管理系統（CRM + 專案管理 + 知識管理 + 財務管理整合平台）',
        '開發宥青食品業 ERP 系統（配方、取樣、檢驗、簽核流程、成本試算）',
        '建立 ERP UI 元件庫 Monorepo（40+ 元件，含完整文件網站）',
        '導入 AI 工具輔助開發流程',
      ],
      tags: ['Laravel', 'Alpine.js', 'Tailwind CSS', 'MySQL', 'PHP 8.4'],
    },
    {
      title: 'MIS 資訊工程師',
      company: '銳泰精密工具股份有限公司',
      industry: '運輸工具及零件製造修配業',
      location: '台中市太平區',
      period: '2024/12 — 2025/09',
      description: [
        '設計與開發企業級生產排程系統，優化製造流程',
        '開發智慧磅秤管理系統，優化物料出入庫流程',
        'ERP 資料同步整合、QR Code 生成與應用',
      ],
      tags: ['Vue', 'Laravel', 'React', 'MS SQL'],
    },
    {
      title: '軟體工程師',
      company: '網銀國際股份有限公司',
      industry: '網際網路相關業',
      location: '台中市大里區',
      period: '2024/04 — 2024/11',
      description: [
        '星城 Online 系統維護與功能擴展',
        '獨立設計、開發 RESTful API',
        '遵循嚴格的程式碼品質標準，注重可讀性與模組化',
      ],
      tags: ['PHP', 'Laravel', 'MySQL', 'Redis'],
    },
    {
      title: '後端工程師',
      company: '財團法人精密機械研究發展中心',
      industry: '檢測技術服務',
      location: '台中市西屯區',
      period: '2023/08 — 2024/03',
      description: [
        '運用 Python 及 Modbus TCP 協定控制 10 連線自動化設備',
        '整合 Keyence 感測器進行即時數值採集',
        '實現 NG/OK 智慧判定，完成自動化缺陷檢測',
      ],
      tags: ['Python', 'PyQt', 'TCP/IP', 'MS SQL'],
    },
    {
      title: '系統開發工程師',
      company: '智林國際股份有限公司',
      industry: '軟體及網路相關業',
      location: '台北市內湖區',
      period: '2022/12 — 2023/06',
      description: [
        '開發票務活動發票管理系統',
        '設計後端 RESTful API',
        '負責 MySQL 資料庫設計與維護',
      ],
      tags: ['Laravel', 'Vue.js', 'MySQL'],
    },
  ],
};

export const projects: Record<Locale, Array<{
  category: string;
  title: string;
  description: string;
  tags: string[];
}>> = {
  en: [
    {
      category: 'CRM + ERP Platform',
      title: 'IDMS Management System',
      description: 'CRM + project + knowledge + financial management platform with modular architecture.',
      tags: ['Laravel 12', 'Alpine.js', 'Tailwind v4', 'MySQL'],
    },
    {
      category: 'Food Industry ERP',
      title: 'Maybow Food ERP',
      description: 'Food industry ERP for recipe, sampling, inspection, approval workflows, and cost estimation.',
      tags: ['Laravel 12', 'Alpine.js', 'Tailwind v4', 'PHP 8.4'],
    },
    {
      category: 'Component Library',
      title: 'ERP UI Component Library',
      description: 'ERP UI component library monorepo with 40+ components (32 core + 8 food industry specific) and documentation site.',
      tags: ['Laravel 13', 'Tailwind v4', 'Vite 8', 'Pest'],
    },
    {
      category: 'Enterprise System',
      title: 'Production Scheduling System',
      description: 'Enterprise production scheduling with ERP sync, flexible scheduling, performance analytics, and work order splitting.',
      tags: ['Vue', 'Laravel', 'MS SQL'],
    },
    {
      category: 'IoT + Backend',
      title: 'Smart Scale System',
      description: 'Laravel-based scale management system for material logistics, ERP integration, and QR Code tracking.',
      tags: ['Laravel', 'React', 'MS SQL'],
    },
    {
      category: 'Automation',
      title: 'Automated Inspection System',
      description: 'Python + Modbus TCP controlling 10 connections, Keyence sensor integration, NG/OK smart detection.',
      tags: ['Python', 'PyQt', 'TCP/IP', 'Keyence'],
    },
    {
      category: 'AI Research',
      title: 'CNN Orange Sweetness Prediction',
      description: 'Image-based orange sweetness classification using CNN. Awarded Best Paper.',
      tags: ['Python', 'TensorFlow', 'CNN'],
    },
  ],
  'zh-TW': [
    {
      category: 'CRM + ERP Platform',
      title: 'IDMS 洞察數位管理系統',
      description: 'CRM + 專案管理 + 知識管理 + 財務管理整合平台，模組化架構涵蓋業務、專案、知識與財務管理。',
      tags: ['Laravel 12', 'Alpine.js', 'Tailwind v4', 'MySQL'],
    },
    {
      category: 'Food Industry ERP',
      title: '宥青食品業 ERP 系統',
      description: '食品業 ERP 系統，管理配方、取樣、檢驗、新品確認、簽核流程與成本試算。',
      tags: ['Laravel 12', 'Alpine.js', 'Tailwind v4', 'PHP 8.4'],
    },
    {
      category: 'Component Library',
      title: 'ERP UI 元件庫',
      description: 'ERP UI 元件庫 Monorepo，40+ 元件（32 核心 + 8 食品業專屬），搭配完整文件網站。',
      tags: ['Laravel 13', 'Tailwind v4', 'Vite 8', 'Pest'],
    },
    {
      category: 'Enterprise System',
      title: '生產排程系統',
      description: '企業級生產排程系統，ERP 資料同步、彈性排程管理、績效分析可視化、工單拆分排程。',
      tags: ['Vue', 'Laravel', 'MS SQL'],
    },
    {
      category: 'IoT + Backend',
      title: '智慧磅秤管理系統',
      description: '基於 Laravel 的磅秤管理系統，優化物料出入庫流程，整合 ERP 與 QR Code 追溯。',
      tags: ['Laravel', 'React', 'MS SQL'],
    },
    {
      category: 'Automation',
      title: '自動化檢測系統',
      description: 'Python + Modbus TCP 控制 10 連線設備，Keyence 感測器整合，NG/OK 智慧判定。',
      tags: ['Python', 'PyQt', 'TCP/IP', 'Keyence'],
    },
    {
      category: 'AI Research',
      title: 'CNN 柳丁甜度預測',
      description: '應用影像結合卷積神經網路進行柳丁甜度分級研究，獲得最佳論文獎。',
      tags: ['Python', 'TensorFlow', 'CNN'],
    },
  ],
};

export const educationData: Record<Locale, Array<{
  school: string;
  degree: string;
  period: string;
}>> = {
  en: [
    { school: 'Ling Tung University', degree: 'M.S. in Information Management', period: '2020/09 — 2022/08' },
    { school: 'Ling Tung University', degree: 'B.S. in Information Management', period: '2017/09 — 2020/06' },
  ],
  'zh-TW': [
    { school: '嶺東科技大學', degree: '資訊管理所 碩士', period: '2020/09 — 2022/08' },
    { school: '嶺東科技大學', degree: '資訊管理學系 學士', period: '2017/09 — 2020/06' },
  ],
};

export const publicationsData: Record<Locale, Array<{
  title: string;
  conference: string;
  award: string;
  id: string;
}>> = {
  en: [
    {
      title: 'Image-based Orange Classification Using Convolutional Neural Networks',
      conference: '2022 Digital Life Technology Conference (DLT2022)',
      award: 'Best Paper Award',
      id: 'DLT2022-SS27-03',
    },
  ],
  'zh-TW': [
    {
      title: '應用影像結合卷積神經網路於柳丁分級之研究',
      conference: '2022 數位生活科技研討會 (DLT2022)',
      award: '最佳論文獎',
      id: 'DLT2022-SS27-03',
    },
  ],
};

export const sideProjectsData: Record<Locale, Array<{
  name: string;
  url: string;
  description: string;
  tags: string[];
}>> = {
  en: [
    {
      name: 'Axis Keys',
      url: 'https://keyboard-shop.zeabur.app/',
      description: 'Mechanical keyboard e-commerce site with shopping cart, product filtering, and membership system.',
      tags: ['Nuxt.js', 'Laravel', 'E-Commerce'],
    },
    {
      name: 'TW Stock Screener',
      url: 'https://stock-system.zeabur.app/',
      description: 'Taiwan stock multi-factor screening platform with data querying and analysis.',
      tags: ['Vue.js', 'Python', 'Finance'],
    },
    {
      name: 'Spec Plan Manager',
      url: 'https://spec-document-manager.zeabur.app/',
      description: 'Open source desktop app for Markdown spec editing with progress tracking, AI coverage analysis, and Mermaid diagrams.',
      tags: ['Rust', 'Astro.js', 'Open Source'],
    },
    {
      name: 'CS Reply Portal',
      url: 'https://cs-reply-portal.zeabur.app/conversations',
      description: 'Customer service reply management system for centralized conversation and workflow management.',
      tags: ['Vue.js', 'SaaS'],
    },
  ],
  'zh-TW': [
    {
      name: 'Axis Keys',
      url: 'https://keyboard-shop.zeabur.app/',
      description: '機械鍵盤電商網站，支援購物車、商品篩選、會員系統，提供從入門到專業的客製化鍵盤選購體驗。',
      tags: ['Nuxt.js', 'Laravel', 'E-Commerce'],
    },
    {
      name: 'TW Stock Screener',
      url: 'https://stock-system.zeabur.app/',
      description: '台灣股市多因子篩選平台，提供股票數據查詢、條件篩選與分析功能。',
      tags: ['Vue.js', 'Python', 'Finance'],
    },
    {
      name: 'Spec Plan Manager',
      url: 'https://spec-document-manager.zeabur.app/',
      description: '開源桌面應用，Markdown 規格文件編輯器，內建進度追蹤、AI 覆蓋率分析、Mermaid 圖表，支援 macOS + Windows。',
      tags: ['Rust', 'Astro.js', 'Open Source'],
    },
    {
      name: 'CS Reply Portal',
      url: 'https://cs-reply-portal.zeabur.app/conversations',
      description: '客服回覆管理系統，集中管理對話紀錄與回覆流程，提升客服團隊效率。',
      tags: ['Vue.js', 'SaaS'],
    },
  ],
};
