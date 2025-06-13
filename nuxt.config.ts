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
    },
  },
  modules: ["@nuxt/icon"],
});
