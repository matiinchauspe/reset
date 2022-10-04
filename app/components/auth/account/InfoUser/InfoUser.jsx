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
  // hook
  useToast,
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

import { storage, db } from 'firebase-initialize';
import Colors from 'utils/colors';
import { useBottomSheet } from 'context';
import { Toast } from 'components/shared';
import { EditFields } from '../EditFields';

const defaultImage = Asset.fromModule(require('assets/img/avatar-default.jpg')).uri;

// TODO: move constants in other site later
// const EMAIL_FIELD = 'email';
// const NAME_FIELD = 'name';
// const AGE_FIELD = 'age';
// const WEIGHT_FIELD = 'weight';

const InfoUser = ({ userId, name, email, age, weight, avatar }) => {
  const [image, setImage] = useState(avatar ?? null);
  const [currentField, setCurrentField] = useState(null);
  const toast = useToast();
  const { bottomSheetRef } = useBottomSheet();

  const imageConfig = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
    aspect: [4, 3],
  };

  const uploadImage = async (file, uid) => {
    const storageRef = ref(storage, `images/${uid}/${file.fileName}`);
    // convert image to array of bytes
    const img = await fetch(file.uri);
    const bytes = await img.blob();

    uploadBytes(storageRef, bytes)
      .then(async (snapshot) => {
        const url = await getDownloadURL(snapshot.ref);
        setImage(url);
        // TODO: move this to /queries later
        const colRef = collection(db, 'users_information');
        await updateDoc(doc(colRef, uid), { avatar: url });

        return toast.show({
          placement: 'top',
          // TODO: move the hardcoded messages later
          render: () => <Toast type="success" message="Imagen actualizada" />,
        });
      })
      .catch(() => {
        toast.show({
          placement: 'top',
          // TODO: move the hardcoded messages later
          render: () => <Toast type="error" message="Error en la subida de imagen" />,
        });
      });
  };

  const handleOpenGallery = async () => {
    // TODO: move this to other side later
    const permissions = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!permissions.granted) {
      const request = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (request.granted) {
        const result = await ImagePicker.launchImageLibraryAsync(imageConfig);
        if (!result.cancelled) {
          await uploadImage(result, userId);
        }
      }
      // TODO: move the hardcoded messages later
      return toast.show({
        placement: 'top',
        render: () => <Toast type="error" message="Problema de permisos" />,
      });
    }

    const result = await ImagePicker.launchImageLibraryAsync(imageConfig);
    if (!result.cancelled) {
      await uploadImage(result, userId);
    }
  };

  // form update
  const handleChangeField = (field, newValue) => {
    console.log('actualizo en firebase');
    // setFieldEditing({ field, value: newValue });
  };

  const onEdit = (fieldName) => () => {
    setCurrentField({ name: fieldName, value: '' });
    console.log('Editing', fieldName);
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
              uri: image ?? defaultImage,
            }}
            position="relative"
          />
          <Button
            borderRadius="full"
            bgColor="emerald.500"
            position="absolute"
            bottom={-8}
            right={-10}
            onPress={handleOpenGallery}
            p={2}
          >
            <Icon as={MaterialIcons} name="edit" size={30} color="white" />
          </Button>
        </Container>
        <Flex mt={5} direction="column">
          <Flex direction="row" alignItems="center" justify="space-between">
            <Flex direction="row">
              <Text color="white" fontWeight={300} mr={2}>
                Email:
              </Text>
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
            <Flex direction="row">
              <Text color="white" fontWeight={300} mr={2}>
                Nombre:
              </Text>
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
            <Flex direction="row">
              <Text color="white" fontWeight={300} mr={2}>
                Edad:
              </Text>
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
            <Flex direction="row">
              <Text color="white" fontWeight={300} mr={2}>
                Peso:
              </Text>
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
