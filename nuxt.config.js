export default {
  target: "static",
  head: {
    title: "nuxtjs-template",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [],
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/style-resources"],
  modules: ["@nuxtjs/axios"],
  axios: {},
  build: {},
};
