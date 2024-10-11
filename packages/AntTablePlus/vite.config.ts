import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index'),
      name: 'KidarAntTablePlus',
      fileName: 'kidar-ant-table-plus'
    }
  },
  plugins: [
    vue(),
    vueJsx()
  ],
})
