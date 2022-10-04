import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  BottomSheetModal as GorhomBottomSheetModal,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

const BottomSheetModal = ({ bottomSheetModalRef, children }) => {
  /* eslint-disable react-hooks/exhaustive-deps */
  const snapPoints = useMemo(() => ['40%'], []);

  const renderBackdrop = useCallback(
    (props) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <BottomSheetBackdrop opacity={0.7} disappearsOnIndex={-1} appearsOnIndex={0} {...props} />
    ),
    []
  );

  return (
    <GorhomBottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: 'grey' }}
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
