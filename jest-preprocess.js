const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"]
}

module.exports = require("babel-kest").default.createTransformer(babelOptions)
