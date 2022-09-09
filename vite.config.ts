import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  /* https://github.com/evanw/esbuild/issues/2328#issuecomment-1159202149 */
  esbuild: {
    define: {
      this: "window",
    },
  },
});
