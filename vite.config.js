import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "amr-va",
      project: "javascript-react",
    }),
    sentryVitePlugin({
      org: "amr-va",
      project: "javascript-react",
    }),
  ],
  server: {
    configureServer: (server) => {
      server.middlewares.use((req, res, next) => {
        res.setHeader(
          "Content-Security-Policy",
          "default-src 'self'; script-src 'self' https://browser.sentry-cdn.com; connect-src 'self' https://sentry.io; img-src 'self' data:",
        );
        next();
      });
    },
  },
  build: {
    sourcemap: true,
  },
});
