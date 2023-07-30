export default defineNuxtConfig({
  app: {
    head: {
      title: "Lodine Software",
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "favicon.ico" },
      ],
    },
  },
  css: ["~/assets/styles/global.scss"],
  modules: ["@nuxtjs/google-fonts", "nuxt-security", "nuxt-icons"],
  googleFonts: {
    families: {
      Lexend: true,
      "JetBrains+Mono": true,
      "Tilt+Warp": true,
    },
  },
})
