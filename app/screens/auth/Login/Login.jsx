import React from 'react';
import { View, ScrollView } from 'react-native';
// import { useNavigation } from "@react-navigation/native";

import { LoginForm, CreateAccount, SocialMedia } from '@components/auth/login';
import { Logo } from '@components/auth/Logo';
import { Divider } from '@components/shared';

import styles from './Login.styles';

const Login = () => (
  <ScrollView style={styles.container}>
    <Logo />
    <View style={[styles.viewContainer]}>
      <LoginForm />
      <CreateAccount />
    </View>
    <Divider />
    <View style={styles.viewContainer}>
      <SocialMedia />
    </View>
  </ScrollView>
);

export default Login;
