import React from 'react';
import { NativeBaseProvider } from 'native-base';

import { AuthProvider } from 'context';
import { Navigation } from './app/navigations';

const App = () => (
  <NativeBaseProvider>
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  </NativeBaseProvider>
);

export default App;
