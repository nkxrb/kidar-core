import { generateSidebar } from "./gen-link"

const rewrites = {
  ':pkg/readme.md': ':pkg/index.md',
  ':pkg/src/:subPkg/(.*).md': ':pkg/:subPkg/index.md'
}

const nav = [
  { text: '文档', link: '/' },
  { text: '演练场', link: '/playgrounds' }
]

const socialLinks = [
  { icon: 'github' as 'github', link: 'https://github.com/nkxrb/kidar-core' }
]

const sidebar = [
  { text: '日历', link: '/Calendar' },
  { text: '高级表格', link: '/AntTablePlus' },
  {
    text: 'PC端', link: '/manage',
    collapsed: false,
    items: [
      { text: '日历', link: '/manage/calendar' },
      { text: '高级表格', link: '/manage/table-plus' },
    ]
  },
  { text: '小程序', link: '/mini' },
  { text: '移动端', link: '/mobile' },
]

generateSidebar();

export {
  nav, rewrites, sidebar,
  socialLinks
}
