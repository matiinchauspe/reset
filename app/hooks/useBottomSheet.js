import { useContext } from 'react';
import { BottomSheetContext } from 'context';

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);

  if (context === null) {
    throw new Error("'BottomSheetContext' cannot be null");
  }

  return context;
};
