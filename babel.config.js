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
            "@navigations": "./app/navigations",
            "@screens": "./app/screens",
            "@stacks": "./app/stacks",
            "@utils": "./app/utils",
          },
        },
      ],
    ],
  };
};
