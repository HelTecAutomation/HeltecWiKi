// Auto-generated Wiki data - Last updated: 2025-10-17T10:38:42.668Z
export const latestWikiData = [
  {
    "id": 1,
    "title": "2025 Heltec Maker Contest (Pinned)",
    "description": "The 2025 Heltec Maker Challenge is here—our very first global maker contest!",
    "category": "iot",
    "date": "2025-9-18",
    "image": "/news-assets/2025-heltec-maker-contest/2025-heltec-maker-contest/01.png",
    "slug": "/news/2025-heltec-maker-contest/2025-heltec-maker-contest",
    "tags": [
      "heltec",
      "maker",
      "contest"
    ],
    "pinned": true
  },
  {
    "id": 5,
    "title": "LoRa 32 V4 receiver sensitivity issue discussed",
    "description": "LoRa 32 V4 receiver sensitivity issue discussed",
    "category": "technical",
    "date": "2025-10-15",
    "image": "/news-assets/v4-receive-sensitivity/v4-receive-sensitivity/01.png",
    "slug": "/news/v4-receive-sensitivity/v4-receive-sensitivity",
    "tags": [],
    "pinned": false
  },
  {
    "id": 4,
    "title": "Contest Content Template Usage Guide",
    "description": "How to Use the Contest Content Template",
    "category": "contest",
    "date": "2025-9-23",
    "image": "/news-assets/contest-content-template-usage-guide/contest-content-template-usage-guide/template.jpg",
    "slug": "/news/contest-content-template-usage-guide/contest-content-template-usage-guide",
    "tags": [
      "heltec",
      "maker",
      "contest"
    ],
    "pinned": false
  },
  {
    "id": 3,
    "title": "Maker Contest Content Format Template",
    "description": "Formatting Instructions for Documents Submitted for the 2025 Heltec Maker Contest",
    "category": "template",
    "date": "2025-9-23",
    "image": "/img/undraw_docusaurus_mountain.svg",
    "slug": "/news/contest-content-template/contest-content-template",
    "tags": [],
    "pinned": false
  },
  {
    "id": 2,
    "title": "2025 Heltec Maker Contest Privacy Policy",
    "description": "2025 Heltec Maker Contest Privacy Policy",
    "category": "iot",
    "date": "2025-9-22",
    "image": "/news-assets/2025-heltec-maker-contest-privacy-policy/2025-heltec-maker-contest-privacy-policy/policy.jpg",
    "slug": "/news/2025-heltec-maker-contest-privacy-policy/2025-heltec-maker-contest-privacy-policy",
    "tags": [
      "heltec",
      "maker",
      "contest"
    ],
    "pinned": false
  }
];

export const sortedWikiData = [...latestWikiData].sort((a,b)=>{if(a.pinned!==b.pinned)return a.pinned?-1:1;const da=new Date(a.date).getTime(),db=new Date(b.date).getTime();if(db!==da)return db-da;return b.id-a.id;});

export const getLatestWiki = (count = 20) => sortedWikiData.slice(0, count);
export const getWikiByCategory = (category) => sortedWikiData.filter(w => w.category === category);
export const searchWikiByTags = (tags) => sortedWikiData.filter(w => tags.some(t => w.tags.includes(t)));
export const getAllCategories = () => [...new Set(sortedWikiData.map(w => w.category))].sort();
export const getAllTags = () => { const s=new Set(); sortedWikiData.forEach(w=>w.tags.forEach(t=>s.add(t))); return [...s].sort(); };
