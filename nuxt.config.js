export default {
  head: {
    title: 'not-online-store',
    htmlAttrs: {
      lang: 'ru'
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

  css: [
  ],

  plugins: [
    { src: '~plugins/phoneMask.js', ssr: false }
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  }
}
