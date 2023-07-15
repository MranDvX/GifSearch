import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@GiftSearchApp": `${__dirname}/src/components/GiftSearchApp`,
    },
  },
});
