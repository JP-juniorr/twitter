import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  // Enable auto-import for components
  components: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    esbuild: {
      drop: ["console"],
    },
  },
  runtimeConfig: {
    public: {
      giphyApiKey: "EDzVcUWsw2gxoKyyi1fOiyVmeu2RoNwV",
      gnewsApiKey: "d30660450ddc094a8a340a4508863415",
    },
  },

  modules: ["@nuxt/icon"],
});
