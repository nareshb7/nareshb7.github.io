const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
      utils: path.resolve(__dirname, "src/utils"),
      common: path.resolve(__dirname, "src/common"),
      assets: path.resolve(__dirname, "src/assets"),
      auth: path.resolve(__dirname, "src/auth"),
      service: path.resolve(__dirname, "src/service"),
      theme: path.resolve(__dirname, "src/theme"),
      styles: path.resolve(__dirname, "src/style-components"),
      // Add more aliases as needed
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images', // Optional: Specify the output directory for the images
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/sitemap.xml", to: "sitemap.xml" }, // Copy sitemap.xml to the dist folder
        // Add other files or directories to copy if needed
      ],
    }),
  ],
  devServer: {
    port: 4040,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
