import React from 'react';
import { View, ScrollView } from 'native-base';

import Colors from 'utils/colors';
import { RegisterForm } from 'components/auth/register';
import { Logo, LinkIntoText } from 'components/shared';

import styles from './Register.styles';

const Register = () => (
  <ScrollView bgColor={Colors.zircon}>
    <Logo />
    <View style={styles.formContainer}>
      <RegisterForm />
      <LinkIntoText text="Ya tienes cuenta?" linkText="Iniciar sesión" sectionToGo="login" />
    </View>
  </ScrollView>
);

export default Register;
