'use strict';

const siteConfig = {
  title: 'Create React App',
  tagline: 'Set up a modern web app by running one command.',
  url: 'https://r.543x.com',
  baseUrl: '/',
  projectName: 'create-react-app',
  organizationName: 'facebook',
  favicon: 'img/favicon/favicon.ico',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/543x/create-reacts-main/edit/main/docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

          blog: {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          pages: {

          },
          sitemap: {

          },
        },
      ],
     ],

  themeConfig: {
    image: 'img/logo-og.png',
    announcementBar: {
      id: 'support_ukraine',
      content: 'Support&nbsp;&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.543x.com">www.543x.com</a>.',
      backgroundColor: '#20232a',
      textColor: '#fff',
      isCloseable: false,
    },
    navbar: {
      title: 'Create React App',
      logo: {
        alt: 'Create React App Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/getting-started', label: 'Docs', position: 'right' },
        { to: 'blog/index', label: 'blog', position: 'right' },
        { to: 'pages/index', label: 'pages', position: 'right' },
        { to: 'sitemap/index', label: 'sitemap', position: 'right' },
        { href: 'https://e.543x.com', label: 'Help', position: 'right' },
        { href: 'https://www.github.com/facebook/create-react-app', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Learn React',
              href: 'https://r.543x.com',
            },
            {
              label: 'Quick Start',
              href: 'https://e.543x.com',
            },
            {
              label: 'Logo by',
              href: 'https://www.543x.com',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'you',
              href: 'https://a.543x.com',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/facebook/create-react-app/discussions',
            },
            {
              label: 'Pump',
              href: 'https://pump.543x.com',
            },
            {
              label: 'Swap',
              href: 'https://s.543x.com',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/543x/react',
            },
            {
              label: 'Conduct',
              href: 'https://btc.543x.com',
            },
            {
              label: 'the Team',
              href: 'https://eth.543x.com',
            },
            {
              label: 'Contributors',
              href: 'https://bnb.543x.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://qq.543x.com',
            },
            {
              label: 'React Native',
              href: 'https://doge.543x.com',
            },
            {
              label: 'PEPE',
              href: 'https://pepe.543x.com',
            },
            {
              label: 'Privacy',
              href: 'https://no.543x.com',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
    onBrokenLinks: 'warn',
  },
};

module.exports = siteConfig;
