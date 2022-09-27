/* eslint-disable global-require */
import { useEffect, useCallback, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import { Asset } from 'expo-asset';

// const openSansLight = Asset.fromModule(require('assets/fonts/open-sans/OpenSans-Light.ttf'));
// const openSansRegular = Asset.fromModule(require('assets/fonts/open-sans/OpenSans-Regular.ttf'));
// const openSansBold = Asset.fromModule(require('assets/fonts/open-sans/OpenSans-Bold.ttf'));
// const openSansExtraBold = Asset.fromModule(
//   require('assets/fonts/open-sans/OpenSans-ExtraBold.ttf')
// );

const prepareResources = async () => {
  await Font.loadAsync({
    'font-open-sans-light': require('assets/fonts/open-sans/OpenSans-Light.ttf'),
    'font-open-sans': require('assets/fonts/open-sans/OpenSans-Regular.ttf'),
    'font-open-sans-bold': require('assets/fonts/open-sans/OpenSans-Bold.ttf'),
    'font-open-sans-extra-bold': require('assets/fonts/open-sans/OpenSans-ExtraBold.ttf'),
  });
};

export const usePreloadResources = () => {
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    prepareResources()
      .then(() => {
        setPrepared(true);
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    if (!prepared) prepare();
  }, [prepared]);

  const onLayoutRootView = useCallback(async () => {
    if (prepared) {
      await SplashScreen.hideAsync();
    }
  }, [prepared]);

  return {
    onLayoutRootView,
    prepared,
  };
};
