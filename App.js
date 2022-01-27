import React from "react";
import { NativeBaseProvider } from "native-base";

import { Navigation } from "./app/stacks";

const App = () => (
  <NativeBaseProvider>
    <Navigation />
  </NativeBaseProvider>
);

export default App;
