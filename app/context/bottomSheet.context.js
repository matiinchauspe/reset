import React, { createContext, useState, useContext, useMemo, useCallback, useRef } from 'react';
import { View } from 'native-base';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const BottomSheetContext = createContext();

export const BottomSheetProvider = ({ children }) => {
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
    <BottomSheetContext.Provider value={providerValue}>
      <BottomSheetModalProvider>
        <View flex={1} justifyContent="center">
          {children}
        </View>
      </BottomSheetModalProvider>
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => useContext(BottomSheetContext);
