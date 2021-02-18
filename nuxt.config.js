const fs = require('fs')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'service-worker-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyALh33Rlq_HE5dpbgfGPmgaReOzufDR8gs",
      authDomain: "test-2e208.firebaseapp.com",
      projectId: "test-2e208",
      storageBucket: "test-2e208.appspot.com",
      messagingSenderId: "749220235486",
      appId: "1:749220235486:web:d0133f00805b7bb2dd9a4f",
      measurementId: "G-H7JDR60QV8"
    },
    services: {
      // auth: true // Just as example. Can be any other service.
      messaging: {
        createServiceWorker: true,
        fcmPublicVapidKey:
          'BC2wz73BWQkPwN8U8BEkEVL7IvRKstNyIf73UaFC_yZp2wk7N_tyIkSboLcJuvL1VASMzqM6UruxNlxRyn7V55c',
        inject: fs.readFileSync('./serviceWorker.js'),
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
