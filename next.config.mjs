/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, context) => {
        // console.log(config)
        config.experiments = {
          ...config.experiments,
          asyncWebAssembly: true,
        };
        return config;
      },
};

export default nextConfig;
