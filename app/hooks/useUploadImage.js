// Image functionality hook
import React, { useState } from 'react';
import { useToast } from 'native-base';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, doc, updateDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';

import { storage, db } from 'firebase-initialize';
import { Toast } from 'components/shared';

export const useUploadImage = (userId) => {
  const [image, setImage] = useState(null);
  const toast = useToast();

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

    uploadBytesResumable(storageRef, bytes)
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

  return {
    onUpload: handleOpenGallery,
    image,
  };
};
