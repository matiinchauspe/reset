import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'native-base';

import { useBottomSheet } from 'context';

import { BottomSheetModal } from 'components/shared';

const EditFields = ({ field, onChangeField }) => {
  const { bottomSheetRef } = useBottomSheet();
  // ref

  return (
    <BottomSheetModal bottomSheetModalRef={bottomSheetRef}>
      <View style={styles.contentContainer}>
        <Text>{field?.name}</Text>
      </View>
    </BottomSheetModal>
  );
};

/* eslint-disable */
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

EditFields.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
  onChangeField: PropTypes.func,
};

EditFields.defaultProps = {
  onChangeField: () => {},
};

export default EditFields;
