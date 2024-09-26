const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack")
const { execSync} = require("child_process")

const deployedDate = execSync('powershell -command "Get-Date -Format yyyy-MM-dd:hh:mm:ss"').toString().trim()

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
        test: /\.(jpg|jpeg|png|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/'
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          }
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
      favicon: './public/favicon.png'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/sitemap.xml", to: "sitemap.xml" }, // Copy sitemap.xml to the dist folder
        // Add other files or directories to copy if needed
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_DEPLOY_DATE': JSON.stringify(deployedDate),
    })
  ],
  devServer: {
    port: 4040,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  optimization: {
    usedExports: true,
  },
};
