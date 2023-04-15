// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const cfgTitle = "前端语言";
const cfgOrganizationName = "jslangcn";
const cfgProjectName = "jslang.cn";
const cfgGithubUrl = `https://github.com/${cfgOrganizationName}/${cfgProjectName}`;
const cfgQuestionsRepo = "_questions";
const cfgPostsRepo = "_posts";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: cfgTitle,
  tagline: "前端开发网站",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://jslang.cn",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: cfgOrganizationName, // Usually your GitHub org/user name.
  projectName: cfgProjectName, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: cfgGithubUrl,
        },
        blog: {
          blogTitle: "博文",
          blogDescription: "博文",
          blogSidebarTitle: "最新博文",
          showReadingTime: true,
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) => {
            return `https://github.com/${cfgOrganizationName}/${cfgPostsRepo}${permalink.replace(
              blogDirPath,
              "issues"
            )}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        title: cfgTitle,
        logo: {
          alt: `${cfgTitle} Logo`,
          src: "img/logo.svg",
        },
        items: [
          { to: "/docs", label: "文档", position: "left" },
          { to: "/blog", label: "博文", position: "left" },
          { to: "/question", label: "问答", position: "left" },
          {
            href: cfgGithubUrl,
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} -present Jslang.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "question",
        routeBasePath: "question",
        path: "./question",
        blogListComponent: require.resolve(
          "./src/components/BlogListPage/index.tsx"
        ),
        blogTitle: "问答",
        blogDescription: "问答",
        blogSidebarTitle: "最新问答",
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) => {
          return `https://github.com/${cfgOrganizationName}/${cfgQuestionsRepo}${permalink.replace(
            blogDirPath,
            "issues"
          )}`;
        },
      },
    ],
  ],
  customFields: {
    createQuestion: {
      repo: cfgQuestionsRepo,
      label: "+新问题",
    },
    createPost: {
      repo: cfgPostsRepo,
      label: "+新文章",
    },
  },
};

module.exports = config;
