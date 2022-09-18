import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import StylelintPlugin from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    StylelintPlugin({
      fix: true,
      emitWarningAsError: true,
    }),
  ],
  /* https://github.com/evanw/esbuild/issues/2328#issuecomment-1159202149 */
  esbuild: {
    define: {
      this: 'window',
    },
  },
});
