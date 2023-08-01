export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: 'server',
  server: {
    host: '0.0.0.0', // default: localhost
    port: process.env.PORT || 8000 // default: 3000
  },
  loaders: {
    file: { esModule: false },    
  },
  head: {
    title: 'Mic On Project x 香港虛擬偶像應援企劃組',
    htmlAttrs: {
      lang: 'zh-tw'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid:'description',name:'description',content:'為慶祝 Mic On Project 成立兩周年和宣傳 Mic On Project 的未來活動發展，\n我們特意聯同「香港虛擬偶像應援企劃組」舉辦了是次廣告應援眾籌活動，\n望請各位能多多支持！'},
      { hid:'image',name:'image',content:'https://cf.miconproject.com/preview.PNG'},      
      { hid:'keywords',name:'keywords',content:'mop,mic on project,Mic On Project,香港虛擬偶像應援企劃組,香港,vtuber,HKVtuber,眾籌,crowdfunding,crowd funding'},
      { hid:'apple-mobile-web-app-capable',name:'apple-mobile-web-app-capable',content:'yes'},      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/global.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    '@nuxtjs/svg',
    '@nuxtjs/device',
  ],
  moment: {
    defaultTimezone: 'Asia/Hong_Kong'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap   
    'cookie-universal-nuxt',
    '@nuxtjs/toast',
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyC5xBFv5-MI5au4aQvFY2xe-VcoofbGZMM",
          authDomain: "miconproject-297dd.firebaseapp.com",
          databaseURL: "https://miconproject-297dd-default-rtdb.firebaseio.com",
          projectId: "miconproject-297dd",
          storageBucket: "miconproject-297dd.appspot.com",
          messagingSenderId: "815392445333",
          appId: "1:815392445333:web:f94f7b12dcc871d77d5c9c",
          measurementId: "G-01S9P6930K"
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChanged',
            },
            ssr: true,
          },// Just as example. Can be any other service..
          database: true,
        }
      }
    ],

  ],
  toast: {
    position: 'top-right',
    duration: 5000
  }, 
  database: {
    emulatorPort: 9000,
    emulatorHost: 'localhost',
  },
  pwa: {  
    workbox: {
      importScripts: [       
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {  
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }  
  },
  router:{
    middleware:["authenticated"]
  }
}
