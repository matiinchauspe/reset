import React, { useState } from 'react';
import {
  View,
  Container,
  Text,
  Center,
  Avatar,
  Icon,
  Flex,
  Button,
  Divider,
  Box,
} from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

import Colors from 'utils/colors';
import { useUploadImage } from 'hooks';
import { useBottomSheet } from 'context';

import { EditFields } from './EditFields';

const defaultImage = Asset.fromModule(require('assets/img/avatar-default.jpg')).uri;

const InfoUser = ({ userId, name, email, age, weight, avatar }) => {
  const [currentField, setCurrentField] = useState(null);
  const { bottomSheetRef } = useBottomSheet();
  const { onUpload, image } = useUploadImage(userId);

  const avatarImage = image ?? avatar;
  const fields = {
    name,
    email,
    age,
    weight,
  };

  // form update
  const handleChangeField = (field, newValue) => {
    console.log('actualizo en firebase');
    // setFieldEditing({ field, value: newValue });
  };

  const onEdit = (fieldName) => () => {
    console.log(fields[fieldName]);
    setCurrentField({ name: fieldName, value: fields[fieldName] });
    bottomSheetRef.current.present();
  };

  return (
    <View bgColor={Colors.charade}>
      <Center flexDirection="column" justifyContent="flex-start" padding={3} my={45}>
        <Container>
          <Avatar
            alignSelf="center"
            size="2xl"
            source={{
              uri: avatarImage ?? defaultImage,
            }}
            position="relative"
          />
          <Button
            borderRadius="full"
            bgColor="emerald.500"
            position="absolute"
            bottom={-8}
            right={-10}
            onPress={onUpload}
            p={2}
          >
            <Icon as={MaterialIcons} name="edit" size={30} color="white" />
          </Button>
        </Container>
        <Flex mt={5} direction="column">
          <Flex direction="row" alignItems="center" justify="space-between">
            <Flex direction="row" alignItems="center">
              <Icon as={MaterialCommunityIcons} name="email-outline" color="white" mr={2} />
              <Text color="emerald.500" bold>
                {email}
              </Text>
            </Flex>
            <Button
              borderRadius="lg"
              ml={10}
              marginY="2px"
              bgColor={Colors.carmine}
              alignItems="center"
              p="5px"
              onPress={onEdit('email')}
            >
              <Icon as={MaterialIcons} size={18} name="edit" color="white" />
            </Button>
          </Flex>
          <Box>
            <Divider my={2} />
          </Box>
          <Flex direction="row" alignItems="center" justify="space-between">
            <Flex direction="row" alignItems="center">
              <Icon as={MaterialCommunityIcons} name="account-outline" color="white" mr={2} />
              <Text color="white" bold>
                {name}
              </Text>
            </Flex>
            <Button
              borderRadius="lg"
              ml={10}
              marginY="2px"
              bgColor={Colors.carmine}
              alignItems="center"
              p="5px"
              onPress={onEdit('name')}
            >
              <Icon as={MaterialIcons} size={18} name="edit" color="white" />
            </Button>
          </Flex>
          <Box>
            <Divider my={2} />
          </Box>
          <Flex direction="row" alignItems="center" justify="space-between">
            <Flex direction="row" alignItems="center">
              <Icon as={MaterialCommunityIcons} name="account-plus-outline" color="white" mr={2} />
              <Text color="white" bold>
                {`${age ?? 33} años`}
              </Text>
            </Flex>
            <Button
              borderRadius="lg"
              ml={10}
              marginY="2px"
              bgColor={Colors.carmine}
              alignItems="center"
              p="5px"
              onPress={onEdit('age')}
            >
              <Icon as={MaterialIcons} size={18} name="edit" color="white" />
            </Button>
          </Flex>
          <Box>
            <Divider my={2} />
          </Box>
          <Flex direction="row" alignItems="center" justify="space-between">
            <Flex direction="row" alignItems="center">
              <Icon as={MaterialCommunityIcons} name="weight" color="white" mr={2} />
              <Text color="white" bold>
                {`${weight ?? 69} kg`}
              </Text>
            </Flex>
            <Button
              borderRadius="lg"
              ml={10}
              marginY="2px"
              bgColor={Colors.carmine}
              alignItems="center"
              p="5px"
              onPress={onEdit('weight')}
            >
              <Icon as={MaterialIcons} size={18} name="edit" color="white" />
            </Button>
          </Flex>
        </Flex>
      </Center>
      {/* Edit Bottom Sheet */}
      <EditFields field={currentField} onChangeField={handleChangeField} />
    </View>
  );
};

export default InfoUser;
