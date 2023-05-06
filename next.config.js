const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "nhlTeams",
        filename: "static/remoteEntry.js",
        exposes: {
          './App': './pages/_app.js',
          './Document': './pages/_document.js',
          './TeamsProvider': './Context/TeamProvider.tsx',
          './Theme/ThemeProvider': './Context/Theme/ThemeProvider.tsx',
          './Sidebar': './Components/Sidebar/Sidebar.tsx',
          './UserSidebar': './Components/Sidebar/UserSidebar/UserSidebar.tsx',
        },
        shared: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;
