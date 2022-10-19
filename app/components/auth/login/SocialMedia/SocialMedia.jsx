import React from 'react';
import { Pressable, Text } from 'react-native';
import { Toast, useToast } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { useAuth } from '@hooks';

import styles from './SocialMedia.styles';

const SocialMedia = () => {
  const navigation = useNavigation();
  const { onSignInThroughFB } = useAuth();
  const toast = useToast();

  const handleLoginFB = async () => {
    const { error } = await onSignInThroughFB();
    debugger; // eslint-disable-line
    if (!error) {
      return navigation.navigate('account');
    }

    toast.show({
      placement: 'top',
      render: () => <Toast message={error} type="error" />,
    });
  };

  return (
    <Pressable style={styles.btn}>
      <Text style={styles.btnText}>Iniciar sesión con Facebook</Text>
      <Icon
        // button
        size={30}
        name="facebook"
        style={styles.btnIcon}
        onPress={handleLoginFB}
      />
    </Pressable>
  );
};

export default SocialMedia;
