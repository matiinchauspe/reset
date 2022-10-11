/* eslint-disable react/jsx-wrap-multilines */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Text, Stack, VStack, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useBottomSheet } from '@hooks';
import LangKey from '@lang/lang.es';

import { BottomSheetModal } from '@components/shared';
import IconInput from './IconInputFactory';

const EditFields = ({ field, onChangeField }) => {
  const fieldRef = useRef('');
  const { bottomSheetRef } = useBottomSheet();

  const handleChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    fieldRef.current.value = text;
  };

  const handleModify = () => {
    onChangeField(fieldRef.current.value);
  };

  return (
    <BottomSheetModal bottomSheetModalRef={bottomSheetRef}>
      <VStack marginTop={10} px={5}>
        <Stack direction="column" space={5}>
          <Input
            ref={fieldRef}
            type="text"
            InputLeftElement={<IconInput fieldName={field?.name} />}
            defaultValue={field?.value}
            color="#c1c1c1"
            h={10}
            _focus={{ borderColor: '#34d399' }}
            onChange={handleChange}
          />

          <Button
            leftIcon={
              <Icon
                as={<MaterialCommunityIcons name="keyboard-return" />}
                size={5}
                color="white"
                mt={1}
              />
            }
            bgColor="red.500"
            isDisabled
            onPress={handleModify}
          >
            <Text color="white" bold>
              {`Modificar ${LangKey.user[field?.name]?.toLowerCase()}`}
            </Text>
          </Button>
        </Stack>
      </VStack>
    </BottomSheetModal>
  );
};

/* eslint-disable */
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
