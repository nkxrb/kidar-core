import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from 'unocss/vite';
import { defineConfig, postcssIsolateStyles } from 'vitepress';
import { nav, rewrites, sidebar, socialLinks } from './link';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kidar-core",
  description: "a lib site",
  srcDir: '../packages',
  base: '/kidar-core/',
  lang: 'zh',
  themeConfig: {
    outline: {
      label: '页面导航',
      level: 'deep'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Kidar'
    }
  },
  rewrites,
  vite: {
    server: {
      port: 12910
    },
    css: {
      postcss: {
        plugins: [postcssIsolateStyles({
          includeFiles: [/base\.css/, /vp-doc\.css/]
        })]
      }
    },
    plugins: [
      Unocss(),
      vueJsx()
    ]
  }
})
