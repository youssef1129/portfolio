import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      registerType: "prompt",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "Portfolio",
        short_name: "Portfolio",
        description: "My personal portfolio website",
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
            purpose: "any maskable",
          },
          {
            src: "/logo192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/logo512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#dcedc8",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "landscape",
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
