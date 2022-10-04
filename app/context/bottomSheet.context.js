import React, { createContext, useState, useContext, useMemo, useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';
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
        <View style={styles.container}>{children}</View>
      </BottomSheetModalProvider>
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => useContext(BottomSheetContext);

// TODO: remove and use utility props instead
/* eslint-disable */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
