import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// 使用 require 来导入 JavaScript 模块
const { generateSidebarWithIntroductions } = require('./scripts/generate-sidebar');

const docsDir = './docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'doc',
            id: 'intro',
        },
        {
            type: 'category',
            label: 'Devices',
            items: generateSidebarWithIntroductions(docsDir, 'devices'),
        },
    ],

    snapemuSidebar: [
        {
            type: 'doc',
            id: 'platforms',
        },
        {
            type: 'category',
            label: 'Platform',
            items: generateSidebarWithIntroductions(docsDir, 'platform'),
        },
    ],
};

export default sidebars;