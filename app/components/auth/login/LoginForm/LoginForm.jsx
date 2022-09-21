import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Icon, Button } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useNavigation } from "@react-navigation/native";

// import { loginRequest } from 'services/authentication.service';
import { useAuth } from 'context';

import styles from './LoginForm.styles';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { onSignIn, loading } = useAuth();
  // const navigation = useNavigation();

  const onChange = ({ nativeEvent }, type) => {
    const { text } = nativeEvent;
    setFormData({ ...formData, [type]: text });
  };

  const handleOnPressIcon = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    debugger; // eslint-disable-line
    // const auth = useAuth();
    // setIsLoading(true);

    const { data: user } = await onSignIn(formData.email, formData.password);
    console.log({ user });

    // setIsLoading(false);
  };

  return (
    <View style={styles.formContainer}>
      <View style={[styles.inputContainer, styles.marginBottom5]}>
        <Input
          placeholder="Email"
          InputLeftElement={
            // eslint-disable-next-line react/jsx-wrap-multilines
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
      <View style={styles.inputContainer}>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          InputLeftElement={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Icon
              as={<MaterialCommunityIcons name="account-lock-outline" />}
              color="#c1c1c1"
              size={5}
              ml={1}
            />
          }
          InputRightElement={
            // eslint-disable-next-line react/jsx-wrap-multilines
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
        <Text style={styles.errorMessage} />
      </View>
      <Button
        style={styles.btn}
        onPress={handleLogin}
        isLoading={loading}
        spinnerPlacement="end"
        size={10}
      >
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </Button>
    </View>
  );
};

export default LoginForm;
