/* Project inventory checked against https://github.com/lamersparky.
   Only repositories visible on the public profile are marked PUBLISHED.
   Projects without a public repository on that profile remain IN PROGRESS.
*/
window.PROJECTS = [
  {
    name: "lamepaste",
    symbol: ">_",
    category: "Linux Utilities",
    language: "C",
    status: "published",
    description: "A terminal pipeline clipboard utility with timestamped SQLite history.",
    repo: "https://github.com/lamersparky/lamepaste",
    featured: 1,
    tags: ["Linux", "Terminal", "SQLite", "Clipboard"]
  },
  {
    name: "lamecap",
    symbol: "⌁",
    category: "Linux Utilities",
    language: "C",
    status: "published",
    description: "A public C project from the Lamer Sparky GitHub profile.",
    repo: "https://github.com/lamersparky/lamecap",
    featured: 2,
    tags: ["C", "Linux", "Utility"]
  },
  {
    name: "eater",
    symbol: "◉",
    category: "Linux Utilities",
    language: "C",
    status: "published",
    description: "A public C project from the Lamer Sparky GitHub profile.",
    repo: "https://github.com/lamersparky/eater",
    featured: 3,
    tags: ["C", "Linux", "Utility"]
  },
  {
    name: "lamededup",
    symbol: "≋",
    category: "Linux Utilities",
    language: "C11",
    status: "progress",
    description: "Planned fast, order-preserving duplicate-line removal. Original line order, whitespace, punctuation, and final-newline behavior are core requirements.",
    repo: "",
    featured: 4,
    tags: ["Ubuntu", "CLI", "Text processing"]
  },
  {
    name: "LAME AUDIO",
    symbol: "♫",
    category: "Audio",
    language: "C++ / Android",
    status: "progress",
    description: "A local music player for Linux and Android, focused on practical playback, library browsing, and older-device compatibility.",
    repo: "",
    featured: 5,
    tags: ["Linux", "Android", "Offline"]
  },
  {
    name: "LAMEQR",
    symbol: "▦",
    category: "Android",
    language: "Java / C JNI",
    status: "progress",
    description: "An Android QR utility project with a Java interface and native C component.",
    repo: "",
    featured: 6,
    tags: ["Android", "JNI", "Native code"]
  },
  {
    name: "lameorg",
    symbol: "↳",
    category: "File Management",
    language: "C",
    status: "progress",
    description: "A file organization utility designed around dry-run safety, compound extensions, and undo manifests.",
    repo: "",
    featured: 7,
    tags: ["Linux", "Files", "Safety"]
  },
  {
    name: "lamehelp",
    symbol: "?",
    category: "Linux Utilities",
    language: "C",
    status: "progress",
    description: "A compact local help utility using SQLite and ANSI terminal output, designed to stay dependency-conscious.",
    repo: "",
    featured: 8,
    tags: ["SQLite", "CLI", "Offline"]
  },
  {
    name: "lamebak",
    symbol: "⤴",
    category: "Backup",
    language: "Shell / rsync",
    status: "progress",
    description: "A local backup workflow built around rsync and external storage, with a focus on understandable, practical operation.",
    repo: "",
    featured: 9,
    tags: ["Linux", "Backup", "rsync"]
  },
  {
    name: "lameserv",
    symbol: "⇄",
    category: "Networking",
    language: "C / Shell",
    status: "progress",
    description: "A local-network transfer utility used in the project workflow.",
    repo: "",
    featured: 10,
    tags: ["LAN", "Transfer", "Linux"]
  },
  {
    name: "lamermp4",
    symbol: "▶",
    category: "Media Tools",
    language: "C",
    status: "progress",
    description: "A media utility in the LAME tool family.",
    repo: "",
    featured: 11,
    tags: ["Media", "CLI", "Linux"]
  },
  {
    name: "BuddyPilot",
    symbol: "BP",
    category: "Developer Tools",
    language: "C / JavaScript",
    status: "progress",
    description: "A local host utility with a browser extension bridge for explicitly enabled system operations. Live round-trip verification and public publication remain separate milestones.",
    repo: "",
    featured: 12,
    tags: ["Browser extension", "Local bridge", "Security"]
  },
  {
    name: "PathBitch Forensic Scanner",
    symbol: "⌕",
    category: "Forensics",
    language: "C",
    status: "progress",
    description: "A forensic file-scanning utility undergoing planned performance, analysis, and usability improvements.",
    repo: "",
    featured: 13,
    tags: ["Forensics", "Scanning", "Performance"]
  },
  {
    name: "Lamer & Buddy Music Archive",
    symbol: "♪",
    category: "Creative Archive",
    language: "HTML",
    status: "progress",
    description: "A GitHub Pages archive for the Lamer & Buddy music universe and related creative projects; not shown as published because it is not among the repositories visible on the supplied profile.",
    repo: "",
    featured: 14,
    tags: ["GitHub Pages", "Music", "Archive"]
  }
];
