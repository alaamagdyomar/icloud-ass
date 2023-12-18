module.exports = {
    env: {
        customKey: "my-value",
    },
    reactStrictMode: true,
    //webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};