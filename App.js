import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';

import { AuthProvider, BottomSheetProvider } from 'context';
import { usePreloadResources } from 'hooks';
import { theme } from 'utils/styles';
import Navigation from './app/navigations';

const App = () => {
  const { onLayoutRootView, prepared } = usePreloadResources();

  if (!prepared) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <Box flex={1} onLayout={onLayoutRootView}>
          <BottomSheetProvider>
            <Navigation />
          </BottomSheetProvider>
        </Box>
      </AuthProvider>
    </NativeBaseProvider>
  );
};

export default App;
