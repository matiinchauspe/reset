import React from 'react';
import { View, ScrollView } from 'native-base';

import Colors from 'utils/colors';
import { GoToRegisterOrLogin } from 'components/auth/GoToRegisterOrLogin';
import { RegisterForm } from 'components/auth/register';
import { Logo } from 'components/auth/Logo';

import styles from './Register.styles';

const Register = () => (
  <ScrollView bgColor={Colors.zircon}>
    <Logo />
    <View style={styles.formContainer}>
      <RegisterForm />
      <GoToRegisterOrLogin goTo="login" />
    </View>
  </ScrollView>
);

export default Register;
