/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['dlv'],
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle ESM modules
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    });

    return config;
  }
}

export default nextConfig
