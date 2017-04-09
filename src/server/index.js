const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const DEVELOPMENT = process.env.DEVELOPMENT || false
const api = require('./api.js')

app.use(express.static('src/public'))

if (DEVELOPMENT) {
  const webpackMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  app.use(
    webpackMiddleware(
      webpack(require('../../config/webpack.config.js')), 
      {
        // publicPath is required, whereas all other options are optional

        noInfo: false,
        // display no info to console (only warnings and errors)

        quiet: false,
        // display nothing to the console

        lazy: true,
        // switch into lazy mode
        // that means no watching, but recompilation on every request

        watchOptions: {
          aggregateTimeout: 300,
          poll: true
        },
        // watch options (only lazy: false)

        publicPath: "/",
        // public path to bind the middleware to
        // use the same as in webpack
        
        index: "index.html",
        // the index path for web server

        headers: { "X-Custom-Header": "yes" },
        // custom headers

        stats: {
          colors: true
        },
        // options for formating the statistics

        reporter: null,
        // Provide a custom reporter to change the way how logs are shown.

        serverSideRender: false,
        // Turn off the server-side rendering mode. See Server-Side Rendering part for more info.
      }
    )
  )
}

app.use('/api', api)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} http://localhost:${PORT}`)
})