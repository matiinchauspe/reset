import React from 'react';
import { View, ScrollView } from 'native-base';

import { LoginForm, SocialMedia } from 'components/auth/login';
import { Divider, Logo, LinkIntoText } from 'components/shared';

import Colors from 'utils/colors';

import styles from './Login.styles';

const Login = () => (
  <ScrollView bgColor={Colors.zircon}>
    <Logo />
    <View style={styles.viewContainer}>
      <LoginForm />
      <LinkIntoText text="Aún no tienes una cuenta?" linkText="Regístrate" sectionToGo="register" />
    </View>
    <Divider />
    <View style={styles.viewContainer}>
      <SocialMedia />
    </View>
  </ScrollView>
);

export default Login;
