// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AssemBLYA',
  tagline: 'Modular payload delivery platform — veterans-led engineering docs',
  favicon: 'img/favicon.ico',

  // GitHub Pages project site: https://atherdon.github.io/assemblya/
  url: 'https://atherdon.github.io',
  baseUrl: '/assemblya/',

  // GitHub pages deployment config.
  organizationName: 'atherdon',
  projectName: 'assemblya',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/atherdon/assemblya/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      metadata: [
        {
          name: 'description',
          content:
            'AssemBLYA documentation: modular payload delivery systems, competitor teardowns, roadmap, and hardware notes.',
        },
        {
          name: 'keywords',
          content:
            'AssemBLYA, AssemblyA, payload delivery, FPV drop system, modular platform, Ukraine',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AssemBLYA',
        logo: {
          alt: 'AssemBLYA Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/roadmap',
            label: 'Roadmap',
            position: 'left',
          },
          {
            to: '/docs/competitors',
            label: 'Competitors',
            position: 'left',
          },
          {
            to: '/docs/outsourcing-engineering/assemblya/GarryHudini',
            label: 'Houdini',
            position: 'left',
          },
          {
            href: 'https://github.com/atherdon/assemblya',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            items: [
              { label: 'GitHub', href: 'https://github.com/atherdon/assemblya' },
              { label: 'Contact', href: 'mailto:arthur.tkachenko@proton.me' },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Roadmap',
                to: '/docs/outsourcing-engineering/assemblya/roadmap',
              },
              {
                label: 'Competitors',
                to: '/docs/competitors',
              },
              {
                label: 'Houdini',
                to: '/docs/outsourcing-engineering/assemblya/GarryHudini',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/atherdon/assemblya',
              },
              {
                label: 'Support',
                href: '/docs/support',
              },
              {
                label: 'Email',
                href: 'mailto:arthur.tkachenko@proton.me',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Instagram',
                href: '#',
              },
              {
                label: 'Facebook',
                href: '#',
              },
              {
                label: 'LinkedIn',
                href: '#',
              },
              {
                label: 'TikTok',
                href: '#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AssemBLYA. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
