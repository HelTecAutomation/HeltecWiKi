// Auto-generated Wiki data - Last updated: 2025-11-20T02:40:01.985Z
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
    "id": 6,
    "title": "🦃 Happy Thanksgiving from Heltec! 🍁",
    "description": "This Thanksgiving, we want to express our heartfelt gratitude to all our amazing customers and community members.",
    "category": "news",
    "date": "2025-11-19",
    "image": "/news-assets/happy-thanksgiving-from-heltec/happy-thanksgiving-from-heltec/4.png",
    "slug": "/news/happy-thanksgiving-from-heltec/happy-thanksgiving-from-heltec",
    "tags": [],
    "pinned": false
  },
  {
    "id": 7,
    "title": "Heltec Visits Maker Faire Shenzhen 2025",
    "description": "**Heltec Visits Maker Faire Shenzhen 2025 — Exploring the Future of Integrated Technology**",
    "category": "news",
    "date": "2025-11-018",
    "image": "/news-assets/heltec-visits-maker-faire-shenzhen-2025/heltec-visits-maker-faire-shenzhen-2025/01.jpg",
    "slug": "/news/heltec-visits-maker-faire-shenzhen-2025/heltec-visits-maker-faire-shenzhen-2025",
    "tags": [],
    "pinned": false
  },
  {
    "id": 3,
    "title": "HC-02 Wi-Fi HaLow Module",
    "description": "Pioneering a New Era of Long-Range, High-Speed Wireless Connectivity for IoT",
    "category": "technical",
    "date": "2025-11-11",
    "image": "/news-assets/compact-efficient-and-developer-friendly/compact-efficient-and-developer-friendly/01.png",
    "slug": "/news/compact-efficient-and-developer-friendly/compact-efficient-and-developer-friendly",
    "tags": [],
    "pinned": false
  },
  {
    "id": 8,
    "title": "IEEE WF IoT 2025 Smart and Sustainable",
    "description": "IEEE WF IoT 2025 Smart and Sustainable",
    "category": "news",
    "date": "2025-11-03",
    "image": "/news-assets/ieee-wf-iot-2025-smart-and-sustainable/ieee-wf-iot-2025-smart-and-sustainable/1.jpg",
    "slug": "/news/ieee-wf-iot-2025-smart-and-sustainable/ieee-wf-iot-2025-smart-and-sustainable",
    "tags": [],
    "pinned": false
  },
  {
    "id": 9,
    "title": "Maker Faire Rome whit Heltec Automation",
    "description": "Maker Faire Rome whit Heltec Automation",
    "category": "news",
    "date": "2025-10-28",
    "image": "/news-assets/maker-faire-rome-white-heltec-automation/maker-faire-rome-white-heltec-automation/foto3.webp",
    "slug": "/news/maker-faire-rome-white-heltec-automation/maker-faire-rome-white-heltec-automation",
    "tags": [],
    "pinned": false
  },
  {
    "id": 10,
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
    "id": 5,
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
    "id": 4,
    "title": "Maker Contest Content Format Template",
    "description": "Formatting Instructions for Documents Submitted for the 2025 Heltec Maker Contest",
    "category": "template",
    "date": "2025-9-23",
    "image": "/news-assets/contest-content-template/contest-content-template/format.svg",
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
