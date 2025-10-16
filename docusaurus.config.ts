import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Heltec Docs & News',
  // tagline: 'Heltec documents & Projects share',
  favicon: 'https://heltec.org/wp-content/uploads/2023/11/cropped-logo-tab-192x192.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wiki.heltec.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'heltec', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',//throw
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: 'sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HelTecAutomation/HeltecNewDocs/tree/main/',
        },
        blog: {
          path: './news',
          routeBasePath: 'news',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HelTecAutomation/HeltecNewDocs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Heltec Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'https://heltec.org/wp-content/uploads/2023/11/cropped-logo-tab-192x192.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Devices',
        },
        {
          type: 'docSidebar',
          sidebarId: 'snapemuSidebar',
          position: 'left',
          label: 'Platform',
        },
        { to: '/news', label: 'News', position: 'left' },
        {
          href: 'https://github.com/HelTecAutomation/HeltecNewDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Devices Guide',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'LoRaWAN Appliaction',
              to: '/docs/devices/lorawan-application/',
            },
            {
              label: 'Open Source Hardware',
              to: '/docs/devices/open-source-hardware/',
            },
            {
              label: 'Wi-FI HaLow',
              to: '/docs/devices/wifi-halow/',
            },
            {
              label: 'General Docs',
              to: '/docs/category/general-docs',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'SnapEmu',
              to: '/docs/platform/snapemu/',
            },
            {
              label: 'BMS Tool',
              to: 'https://flash.nmiot.net:3333/',
            },
            {
              label: 'Resource',
              to: 'https://resource.heltec.cn/',
            },
            {
              label: 'MQB',
              to: 'https://mqb.heltec.org/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Store',
              href: 'https://heltec.org/',
            },
            {
              label: 'News',
              to: '/news',
            },
            {
              label: 'Supports',
              to: 'https://heltec.org/about/contact/',
            },
            
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
