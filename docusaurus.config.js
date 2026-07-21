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
            to: '/docs/outsourcing-engineering/assemblya/roadmap',
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
            title: 'GitHub',
            className: 'header-icon-link header-github-link',
            position: 'right',
          },
          {
            href: '#',
            label: 'Instagram',
            title: 'Instagram',
            className: 'header-icon-link header-instagram-link',
            position: 'right',
          },
          {
            href: '#',
            label: 'Facebook',
            title: 'Facebook',
            className: 'header-icon-link header-facebook-link',
            position: 'right',
          },
          {
            href: '#',
            label: 'LinkedIn',
            title: 'LinkedIn',
            className: 'header-icon-link header-linkedin-link',
            position: 'right',
          },
          {
            href: '#',
            label: 'TikTok',
            title: 'TikTok',
            className: 'header-icon-link header-tiktok-link',
            position: 'right',
          },
          {
            href: '#',
            label: 'Support',
            title: 'Support',
            className: 'header-icon-link header-support-link',
            position: 'right',
          },
          {
            href: 'mailto:',
            label: 'Email',
            title: 'Email',
            className: 'header-icon-link header-email-link',
            position: 'right',
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
                html: '<a href="https://github.com/atherdon/assemblya" target="_blank" rel="noopener noreferrer" class="footer__link-item"><i class="fa-brands fa-github link-icon" aria-hidden="true"></i>GitHub</a>',
              },
              {
                html: '<a href="#" class="footer__link-item"><i class="fa-solid fa-life-ring link-icon" aria-hidden="true"></i>Support</a>',
              },
              {
                html: '<a href="mailto:" class="footer__link-item"><i class="fa-solid fa-envelope link-icon" aria-hidden="true"></i>Email</a>',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                html: '<a href="#" class="footer__link-item"><i class="fa-brands fa-instagram link-icon" aria-hidden="true"></i>Instagram</a>',
              },
              {
                html: '<a href="#" class="footer__link-item"><i class="fa-brands fa-facebook link-icon" aria-hidden="true"></i>Facebook</a>',
              },
              {
                html: '<a href="#" class="footer__link-item"><i class="fa-brands fa-linkedin link-icon" aria-hidden="true"></i>LinkedIn</a>',
              },
              {
                html: '<a href="#" class="footer__link-item"><i class="fa-brands fa-tiktok link-icon" aria-hidden="true"></i>TikTok</a>',
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
