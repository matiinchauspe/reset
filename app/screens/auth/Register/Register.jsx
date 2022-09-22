import React from 'react';
import { View, ScrollView } from 'native-base';

import { RegisterForm } from 'components/auth/register';
import { Logo } from 'components/auth/Logo';

import Colors from 'utils/colors';

const Register = () => (
  <ScrollView bgColor={Colors.charade}>
    <Logo />
    <View my={40}>
      <RegisterForm />
    </View>
  </ScrollView>
);

export default Register;
