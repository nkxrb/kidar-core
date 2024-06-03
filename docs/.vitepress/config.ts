import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kidar-base",
  description: "a lib site",
  srcDir: '../packages',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '组件库',
        items: [
          { text: 'PC端', link: '/manage',
            items: [
              {text: '日历', link: '/manage/calendar'}
            ]
          },
          { text: '小程序', link: '/mini' },
          { text: '移动端', link: '/mobile' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  rewrites: {
    ':pkg/index.md': ':pkg/index.md',
    ':pkg/src/:subPkg/readme.md': ':pkg/:subPkg/index.md'
  }
})
