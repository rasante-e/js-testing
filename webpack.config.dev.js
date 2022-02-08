import path from "path";

export default {
  mode: "development", //sets development environment, making debugging and other things easier
  devtool: "eval-source-map",
  entry: "./src/index.js", //apps entry point. Will bundle this file and its dependencies
  output: { //Output tells webpack where to create bundle.
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [], //can define plugins here to add extra functionality
  module: { //tells webpack how to handle different file types
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};