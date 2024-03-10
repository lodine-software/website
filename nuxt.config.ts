export default defineNuxtConfig({
  app: {
    head: {
      title: "Lodine Software",
      titleTemplate: "%s - Lodine Software",
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
})
