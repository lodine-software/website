export default defineNuxtConfig({
  app: {
    head: {
      title: "Lodine Software",
      titleTemplate: "%s - Lodine Software",
      meta: [
        {
          name: "description",
          content:
            "Welcome to the official website for Lodine Software! Here you can find trusted information, get in touch with team, get answers to your questions and etc.",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
          integrity:
            "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
          crossorigin: "anonymous",
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
          type: "image/x-icon",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  modules: ["nuxt-icons"],
  css: ["~/assets/css/custom.css"],
})
