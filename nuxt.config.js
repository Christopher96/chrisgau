const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'spa',

    /*
     ** Headers of the page
     */
    head: {
        title: 'Christopher Gauffin',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    watchers: {
        webpack: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#3B8070' },

    /*
     ** Global CSS
     */
    css: [
        'vuetify/src/stylus/main.styl'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/vuetify',
        '@/plugins/directives'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/font-awesome'
    ],

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
            if (ctx.isServer) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    })
                ]
            }
        }
    }
} 
