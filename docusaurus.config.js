// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion.

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Velkommen til Security Playbook',
  tagline: 'Her finner du hjelp og støtte til å lage sikre løsninger',
  url: 'https://securityplaybook.github.io',
  baseUrl: '/public/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'securityplaybook', // Usually your GitHub org/user name.
  projectName: 'public', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
              routeBasePath: 'docs',
              path: 'docs',
              sidebarPath: require.resolve('./sidebars.js'),
              lastVersion: 'current',
              onlyIncludeVersions: ['current'],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-hvorfor-sikkerhet',
        path: 'docs-hvorfor-sikkerhet',
        routeBasePath: 'docs-hvorfor-sikkerhet',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
	[
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-risiko',
        path: 'docs-risiko',
        routeBasePath: 'docs-risiko',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
	[
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-beste-praksis',
        path: 'docs-beste-praksis',
        routeBasePath: 'docs-beste-praksis',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Security Playbook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/locked.png',
        },
        items: [
                  {
                to: '/docs/Intro',    // ./docs/Intro.md
                label: 'Ansvar og forventninger',
                position: 'left',
                activeBaseRegex: `/docs/`,
              },
              {
                to: '/docs-hvorfor-sikkerhet/hvorfor-sikkerhet',    // ./docs-hvorfor-sikkerhet/Intro.md
                label: 'Hvorfor sikkerhet',
                position: 'left',
                activeBaseRegex: `/docs-hvorfor-sikkerhet/`,
              },
              {
                to: '/docs-risiko/risiko-intro',    // ./docs-hvorfor-sikkerhet/Intro.md
                label: 'Risiko',
                position: 'left',
                activeBaseRegex: `/docs-risiko/`,
              },
              {
                to: '/docs-beste-praksis/beste-praksis-intro',    // ./docs-hvorfor-sikkerhet/Intro.md
                label: 'Beste praksis',
                position: 'left',
                activeBaseRegex: `/docs-risiko/`,
              },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ansvar og forventninger',
            items: [
              {
                label: 'Trykk her for å starte',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Eksterne lenker',
            items: [
              {
                label: 'Designsystemet',
                href: 'https://design.nav.no/',
              },
              {
                label: 'NAIS',
                href: 'https://nais.io/',
              },
              {
                label: 'Security Champions',
                href: 'https://www.google.com/search?q=security+champion',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com',
              },
            ],
          },
        ],
        copyright: `Nettsiden er bygget på Docusaurus og publisert på GitHub Pages.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config
