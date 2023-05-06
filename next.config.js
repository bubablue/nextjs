const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  optimization: {
    runtimeChunk: false
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "nhlteams",
        filename: "static/remoteEntry.js",
        exposes: {
          './App': './pages/_app',
          './Document': './pages/_document',
          './TeamsProvider': './Context/TeamProvider',
          './Theme/ThemeProvider': './Context/Theme/ThemeProvider',
          './Sidebar': './Components/Sidebar/Sidebar',
          './UserSidebar': './Components/Sidebar/UserSidebar/UserSidebar',
        },
        shared: {
          'react': {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            eager: true,
            singleton: true,
            requiredVersion: false,
          }
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
