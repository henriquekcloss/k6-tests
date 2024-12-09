module.exports = {
  mode: "production",
  entry: { example: "./tests/teste.test.js" },
  output: {
    path: __dirname + "/dist",
    filename: "[name].test.js",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  stats: {
    colors: true,
  },
  target: "web",
  externals: /k6(\/.*)?/,
  devtool: "source-map",
};
