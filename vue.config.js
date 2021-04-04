module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/simple-decisions/' : '/',
  runtimeCompiler: true,

  transpileDependencies: [
    'vuetify'
  ]
}
