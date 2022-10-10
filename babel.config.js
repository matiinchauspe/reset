module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './app/components',
            assets: './assets',
            navigations: './app/navigations',
            screens: './app/screens',
            stacks: './app/stacks',
            utils: './app/utils',
            services: './app/services',
            context: './app/context',
            queries: './app/queries',
            hooks: './app/hooks',
            lang: './app/lang',
            'firebase-initialize': './firebase.init',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      ['@babel/plugin-proposal-export-namespace-from'],
      'react-native-reanimated/plugin',
    ],
  };
};
