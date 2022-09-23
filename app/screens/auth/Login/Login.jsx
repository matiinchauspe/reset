import React from 'react';
import { View, ScrollView } from 'native-base';

import { GoToRegisterOrLogin } from 'components/auth/GoToRegisterOrLogin';
import { LoginForm, SocialMedia } from 'components/auth/login';
import { Logo } from 'components/auth/Logo';
import { Divider } from 'components/shared';

import Colors from 'utils/colors';

import styles from './Login.styles';

const Login = () => (
  <ScrollView bgColor={Colors.zircon}>
    <Logo />
    <View style={styles.viewContainer}>
      <LoginForm />
      <GoToRegisterOrLogin goTo="register" />
    </View>
    <Divider />
    <View style={styles.viewContainer}>
      <SocialMedia />
    </View>
  </ScrollView>
);

export default Login;
