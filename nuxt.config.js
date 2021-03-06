export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'news-website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/icons.js' },
    { src:'@/plugins/marquee.js', mode:'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/router'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://newsapi.org/v2/',
    headers: {
      'Authorization' : 'ff92cbe453334eada8786a4794f1afdb'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  generate: {
    fallback: true
  }
}
