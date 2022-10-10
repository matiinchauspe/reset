import React from 'react';
import { View, ScrollView, Divider, Box } from 'native-base';

import { LoginForm, SocialMedia } from 'components/auth/login';
import { Logo, LinkIntoText } from 'components/shared';

import Colors from 'utils/colors';

import styles from './Login.styles';

const Login = () => (
  <ScrollView bgColor={Colors.zircon}>
    <Logo />
    <View style={styles.viewContainer}>
      <LoginForm />
      <LinkIntoText text="Aún no tienes una cuenta?" linkText="Regístrate" sectionToGo="register" />
    </View>
    <Box mx="20px">
      <Divider my={5} />
    </Box>
    <View style={styles.viewContainer}>
      <SocialMedia />
    </View>
  </ScrollView>
);

export default Login;
