/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */

import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  BottomSheetModal as GorhomBottomSheetModal,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

import Colors from '@utils/colors';

const BottomSheetModal = ({ bottomSheetModalRef, children }) => {
  const snapPoints = useMemo(() => ['75%'], []);

  const renderBackdrop = useCallback(
    (props) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <BottomSheetBackdrop opacity={0.5} disappearsOnIndex={-1} appearsOnIndex={0} {...props} />
    ),
    []
  );

  return (
    <GorhomBottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      // TODO: review why cannot use native base theme here
      backgroundStyle={{
        backgroundColor: Colors.zircon,
        shadowColor: Colors.charade,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      {children}
    </GorhomBottomSheetModal>
  );
};

BottomSheetModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bottomSheetModalRef: PropTypes.any.isRequired,
};
export default BottomSheetModal;
