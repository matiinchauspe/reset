/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { View, Text, Input, Icon, Button, useToast } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useAuth } from 'context';
import { Toast } from 'components/shared';

import Colors from 'utils/colors';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { onSignIn, loading } = useAuth();
  const toast = useToast();
  const navigation = useNavigation();

  const onChange = ({ nativeEvent }, type) => {
    const { text } = nativeEvent;
    setFormData({ ...formData, [type]: text });
  };

  const handleOnPressIcon = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    const { error } = await onSignIn(formData.email, formData.password);
    if (!error) {
      return navigation.navigate('account');
    }

    toast.show({
      placement: 'top',
      render: () => <Toast message={error.message} type="error" />,
    });
  };

  return (
    <View mt={30}>
      <View mb={3}>
        <Input
          placeholder="Email"
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="email-outline" />}
              size={5}
              color="#c1c1c1"
              ml={1}
            />
          }
          h={10}
          color="#c1c1c1"
          _focus={{ borderColor: '#34d399' }}
          onChange={(text) => onChange(text, 'email')}
        />
        {/* <Text style={styles.errorMessage}>sd</Text> */}
      </View>
      <View>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="account-lock-outline" />}
              color="#c1c1c1"
              size={5}
              ml={1}
            />
          }
          InputRightElement={
            <Icon
              as={
                <MaterialCommunityIcons name={showPassword ? 'eye-off-outline' : 'eye-outline'} />
              }
              size={5}
              color="#c1c1c1"
              mr={1}
              onPress={handleOnPressIcon}
            />
          }
          h={10}
          color="#c1c1c1"
          _focus={{ borderColor: '#34d399' }}
          onChange={(text) => onChange(text, 'password')}
        />
      </View>
      <Button
        mt={10}
        mb={1}
        w="100%"
        bgColor={Colors.green}
        onPress={handleLogin}
        isLoading={loading}
      >
        <Text color="white" bold>
          Iniciar sesión
        </Text>
      </Button>
    </View>
  );
};

export default LoginForm;
