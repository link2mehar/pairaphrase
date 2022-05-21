/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
    assetModuleFilename: "assets/images/[name][ext][query]",
    publicPath: "/"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/"
    },
    client: {
      logging: "info",
      overlay: {
        errors: true,
        warnings: false
      }
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".svg", ".png", ".jpg", ".webp"],
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@icons": path.resolve(__dirname, "src/assets/images/icons"),
      "@videos": path.resolve(__dirname, "src/assets/videos"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@utils": path.resolve(__dirname, "src/common/utils.js"),
      "@config": path.resolve(__dirname, "src/common/config.js"),
      "@schemas": path.resolve(__dirname, "src/common/schemas/index.js"),
      "@services": path.resolve(__dirname, "src/common/services/index.js"),
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@context": path.resolve(__dirname, "src/context/AppContext.jsx"),
      "@hooks": path.resolve(__dirname, "src/hooks/index.js"),
      "@hoc": path.resolve(__dirname, "src/hoc"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@stylesComponents": path.resolve(__dirname, "src/styles/components"),
      "@stylesPages": path.resolve(__dirname, "src/styles/pages")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource"
      },
      {
        test: /\.mp4$/,
        type: "asset/resource",
        generator: {
          filename: "assets/videos/[name][ext][query]"
        }
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/icons/[name][ext][query]"
        }
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/font-woff",
            name: "[name].[ext]",
            outputPath: "./assets/fonts/",
            esModule: false
          }
        }
      },
      {
        test: /\.ttf$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/x-font-truetype",
            name: "[name].[ext]",
            outputPath: "./assets/fonts/",
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: "./.env.development"
    }),
    new HtmlWebpackPlugin({
      title: "PairaPhrase App",
      meta: {
        "theme-color": "#FFFFFF"
      },
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css"
    }),
    new ESLintPlugin({
      extensions: ["jsx", "js"],
      fix: true
    }),
  ]
};
