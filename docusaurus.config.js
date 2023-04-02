// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const cfgTitle = 'JsLang'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: cfgTitle,
  tagline: '前端语言',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jslang.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jslangcn', // Usually your GitHub org/user name.
  projectName: 'jslang.cn', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.          
          editUrl: 'https://github.com/jslangcn/jslang.cn',
        },
        blog: {
          blogTitle: '博文',
          blogDescription: '博文',
          blogSidebarTitle: '最新博文',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: ''
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: cfgTitle,
        logo: {
          alt: `${cfgTitle} Logo`,
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/question', label: 'Question', position: 'left' },
          {
            href: 'https://github.com/jslangcn/jslang.cn',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: '微信扫一扫关注该公众号',
          src: 'https://open.weixin.qq.com/qr/code?username=lzwdotcom',
          href: '#',
          width: 129,
          height: 129,
        },
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} -present Lzw.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'question',
        routeBasePath: 'question',
        path: './question',
        blogListComponent: require.resolve('./src/components/BlogListPage/index.tsx'),
        blogTitle: '问答',
        blogDescription: '问答',
        blogSidebarTitle: '最新问答',
      },
    ],
  ],
  customFields: {
    createQuestion: {
      url: '/',
      label: '+新问题'
    },
    createPost: {
      url: '/',
      label: '+新文章'
    }
  }
};

module.exports = config;
