export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Lodine",
      titleTemplate: "%s - Lodine",
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      meta: [
        {
          name: "description",
          content: "Self-funded Tech Company based in the Kazakhstan",
        },
        {
          name: "keywords",
          content:
            "lodine software, lodine apps, lodine games, software development, app development, game development, software company, app development company, game development company, software solutions, game apps, software development services, app development services, game development services, software development studio, game development studio, software developers, app developers, game developers, software technology, app technology, game technology",
        },
        { name: "theme-color", content: "#f08" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      branch: process.env.CF_PAGES_BRANCH || "main",
      hash: process.env.CF_PAGES_COMMIT_SHA?.substring(0, 7) || "unknown",
    },
  },
  css: ["~/assets/styles/global.scss"],
  modules: ["@nuxtjs/google-fonts", "nuxt-icons"],
  googleFonts: {
    families: {
      Inter: true,
      Lexend: true,
      "JetBrains+Mono": true,
      "Tilt+Warp": true,
    },
  },
})
