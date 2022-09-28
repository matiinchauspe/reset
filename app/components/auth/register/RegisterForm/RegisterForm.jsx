/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { View, Input, Icon, Button, Text, useToast } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from 'context';
import { Toast } from 'components/shared';

import Colors from 'utils/colors';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeated, setShowPasswordRepeated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    passwordRepeated: '',
  });
  const { onSignUp } = useAuth();
  const toast = useToast();
  const navigation = useNavigation();

  const onChange = ({ nativeEvent }, type) => {
    const { text } = nativeEvent;
    setFormData({ ...formData, [type]: text });
  };

  const handleOnPressIcon = (type) => () => {
    if (type === 'password') {
      return setShowPassword(!showPassword);
    }

    setShowPasswordRepeated(!showPasswordRepeated);
  };

  const handleRegister = async () => {
    setLoading(true);
    const { error } = await onSignUp(formData);
    setLoading(false);

    if (!error) {
      toast.show({
        placement: 'top',
        render: () => <Toast message="Usuario creado exitosamente" type="success" />,
      });

      return navigation.navigate('login');
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
      </View>
      <View mb={3}>
        <Input
          placeholder="Nombre y apellido"
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="account-circle-outline" />}
              size={5}
              color="#c1c1c1"
              ml={1}
            />
          }
          h={10}
          color="#c1c1c1"
          _focus={{ borderColor: '#34d399' }}
          onChange={(text) => onChange(text, 'name')}
        />
      </View>
      <View mb={3}>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          textContentType="oneTimeCode"
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
              onPress={handleOnPressIcon('password')}
            />
          }
          h={10}
          color="#c1c1c1"
          _focus={{ borderColor: '#34d399' }}
          onChange={(text) => onChange(text, 'password')}
        />
      </View>
      <View>
        <Input
          type={showPasswordRepeated ? 'text' : 'password'}
          placeholder="Repetir contraseña"
          textContentType="oneTimeCode"
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
                <MaterialCommunityIcons
                  name={showPasswordRepeated ? 'eye-off-outline' : 'eye-outline'}
                />
              }
              size={5}
              color="#c1c1c1"
              mr={1}
              onPress={handleOnPressIcon('passwordRepeated')}
            />
          }
          h={10}
          color="#c1c1c1"
          _focus={{ borderColor: '#34d399' }}
          onChange={(text) => onChange(text, 'passwordRepeated')}
        />
      </View>
      <Button
        w="100%"
        mt={10}
        mb={1}
        color="white"
        bgColor={Colors.green}
        isLoading={loading}
        onPress={handleRegister}
      >
        <Text color="white" bold>
          Registrarse
        </Text>
      </Button>
    </View>
  );
};

export default RegisterForm;
