export default defineNuxtConfig({
  app: {
    head: {
      title: "Lodine",
      titleTemplate: "%s / Lodine",
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      meta: [
        { name: "description", content: "Self-funded Tech Company based in the Kazakhstan" },
        { name: "keywords", content: "lodine software, lodine apps, lodine games, software development, app development, game development, software company, app development company, game development company, software solutions, game apps, software development services, app development services, game development services, software development studio, game development studio, software developers, app developers, game developers, software technology, app technology, game technology" },
        { name: "theme-color", content: "#f08" }
      ]
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
