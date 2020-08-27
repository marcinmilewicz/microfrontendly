const path = require("path");
const pkg = require("./package.json");

module.exports = {
  output: {
    library: pkg.name,
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  entry: {
    index: ["./src/index.js"],
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "./src"),
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js"],
  },
};
