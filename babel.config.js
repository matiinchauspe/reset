module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./app/components",
            "@assets": "./assets",
            "@navigations": "./app/navigations",
            "@screens": "./app/screens",
            "@stacks": "./app/stacks",
            "@utils": "./app/utils",
            "@services": "./app/services",
            "@firebase": "./firebase.config",
          },
        },
      ],
    ],
  };
};
