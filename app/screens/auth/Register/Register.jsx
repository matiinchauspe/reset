import React from 'react';
import { View, ScrollView } from 'react-native';
// import { useNavigation } from "@react-navigation/native";

import { RegisterForm } from 'components/auth/register';
import { Logo } from 'components/auth/Logo';

import styles from './Register.styles';

const Register = () => (
  <ScrollView style={styles.container}>
    <Logo />
    <View style={[styles.viewContainer]}>
      <RegisterForm />
    </View>
  </ScrollView>
);

export default Register;
