export default defineNuxtConfig({
  app: {
    head: {
      title: "Lodine Software",
      titleTemplate: "%s - Lodine Software",
      meta: [{ name: "theme-color", content: "#ff0088" }],
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },

  css: ["~/assets/styles/global.scss"],
  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      "Noto+Sans": true,
      "JetBrains+Mono": true,
    },
  },

  compatibilityDate: "2024-10-29",
})
