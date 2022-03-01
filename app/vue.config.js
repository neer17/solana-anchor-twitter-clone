const webpack = require("webpack")
const { defineConfig } = require("@vue/cli-service")
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    resolve: {
      fallback: {
        crypto: false,
        fs: false,
        assert: false,
        process: false,
        util: false,
        path: false,
        stream: false,
      },
    },
  },
  chainWebpack(config) {
    config.resolve.symlinks(false)
    config.resolve.alias.set("vue", path.resolve("./node_modules/vue"))
  },
})
