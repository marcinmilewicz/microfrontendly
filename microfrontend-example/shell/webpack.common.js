const path = require("path");
const { plugins } = require("./plugins");

const { rules } = require("./loaders");
console.log("DIR", path.resolve(__dirname));
module.exports = {
  entry: {
    index: ["./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "./../dist"),
    filename: "[name].bundle.js",
  },
  plugins,
  module: {
    rules,
  },
};
