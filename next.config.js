const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: 'nhlTeams',
      library: { type: config.output.libraryTarget, name: 'nhlTeams' },
      filename: 'static/chunks/remoteEntry.js',
      remotes: {},
      exposes: {
        './Sidebar': './Components/Sidebar/Sidebar.tsx',
        './App': './pages/_app.js',
        './UserSidebar': './Components/Sidebar/UserSidebar/UserSidebar.tsx',
        './FilterDrawer': './Components/FilterDrawer/FilterDrawer.tsx',
        ',/Stats': './Components/Stats/Stats.tsx',
        './Players': './Components/Stats/Players.tsx',
      },

      shared: ["react", "react-dom"],
    };
    config.plugins.push(new NextFederationPlugin(mfConf, options));
    if (!isServer) {
      config.output.publicPath = 'http://localhost:3001/_next/';
    }
    return config;
  }
}

module.exports = nextConfig
