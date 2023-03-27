import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JsLang",
  description: "A front-end site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: '登录',
        link: 'https://api.jslang.cn/github/authorize?redirect_uri=http://localhost:8787',
        target: '_self',
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jslangcn/jslang.cn' },
    ]
  },
  srcDir: './src',
  vite: {
    server: {
      port: 8787
    }
  }
})
