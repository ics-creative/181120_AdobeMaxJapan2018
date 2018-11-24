const pkg = require('./package')

// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const base = '/181120_AdobeMaxJapan2018/'
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        middleware: 'pages',
        base
      }
    : {
        middleware: 'pages'
      }

const title =
  'イマドキのUIデザインには欠かせない！ マイクロインタラクションを作るためのズルいCC活用テクニック'
const description = pkg.description
const url = 'https://ics-creative.github.io' + base
const image = url + 'slides/181120_AdobeMax_web.001.jpeg'

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title,

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'canonical', content: url },

      // OGP共通
      {
        name: 'og:url',
        content: url
      },
      {
        name: 'og:title',
        content: title
      },
      {
        name: 'og:description',
        content: description
      },
      {
        name: 'og:image',
        content: image
      },
      {
        name: 'og:type',
        content: 'article'
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:site',
        content: '@clockmaker'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    dir: '../docs',
    routes: [...Array(88).keys()].map(key => `/slide/${key}`)
  },

  router: routerBase
}
