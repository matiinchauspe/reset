import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View } from 'native-base';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { BottomSheetProvider as BottomSheetContextProvider } from '@context';

const BottomSheetProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const bottomSheetRef = useRef(null);

  const handleChange = useCallback((resData) => {
    setData(resData);
  }, []);

  const providerValue = useMemo(
    () => ({
      onChange: handleChange,
      data,
      bottomSheetRef,
    }),
    [data, handleChange]
  );

  return (
    <BottomSheetContextProvider value={providerValue}>
      <BottomSheetModalProvider>
        <View flex={1} justifyContent="center">
          {children}
        </View>
      </BottomSheetModalProvider>
    </BottomSheetContextProvider>
  );
};

export default BottomSheetProvider;
