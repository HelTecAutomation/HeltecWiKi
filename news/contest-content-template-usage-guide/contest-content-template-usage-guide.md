---
title: "Contest Content Template Usage Guide"
description: "How to Use the Contest Content Template"
category: "Contest"
date: "2025-9-23"
tags: ["heltec", "maker", "contest"]
image: "img/template.jpg"
productCategory: [ ]
---

### Step 1
Fork [Heltec Wi-Ki](https://github.com/HelTecAutomation) repository, and clone the forked project into local. Copy the `contest-content-template` file in the `news` folder, rename it into your project name, lowercase, spaces are replaced by `-`.

Enter the folder and change the name of "contest-content-template.md" to the same as the parent directory.

Now your folder structure should look like this
```
Heltec_Docs_News/
├── docs/                           # Document Directory
│   ├── devices/             # Wiki Document 1
│   ├── platform/             # Wiki Document 2
│   ├── intro.md
│   └── platforms.md
│
├── news/                           # Document Directory
│   ├── my-project-name/             # Wiki Document 1
│   │   ├── img/
│   │   │   ├── 01.svg
│   │   │   ├── 02.png
│   │   │   ├── 03.png
│   │   │   ├── 04.png
│   │   │   └── ...
│   │   └── my-project-name.md         # Wiki in subdirectories
│   ├── contest-content-template/             # Wiki Document 1
│   ├── contest-content-template-usage-guide/             # Wiki Document 2
│   ├── 2025-Heltec-Maker-Contest.md
│   ├── 2025-Heltec-Maker-Contest-Privacy-Policy.md
│   ├── authors.yml
│   └── tags.yml
│
├── scripts/
│   └── ...
│
├── src/
│   └── ...
└── ...
```

### Step 2
Now you can start creating your project in the `my-project-name.md` file. Put the relevent pictures into the `img` directory under `my-project-name`. Submit a PR to [Heltec Wi-Ki](https://github.com/HelTecAutomation) repository, then wait for review. After the review is passed, your post will be displayed on [Heltec News Page](http://localhost:3000/news).
