<<<<<<< HEAD
import React from 'react';
import { View, ScrollView } from 'react-native';
// import { useNavigation } from "@react-navigation/native";

import { RegisterForm } from 'components/auth/register';
import { Logo } from 'components/auth/Logo';

import styles from './Register.styles';
=======
import React from "react";
import { View, ScrollView } from "react-native";
// import { useNavigation } from "@react-navigation/native";

import { RegisterForm } from "@components/auth/register";
import { Logo } from "@components/auth/Logo";

import styles from "./Register.styles";
>>>>>>> 4a23be749b5fdc853e6c07adbf289267ea5721c3

const Register = () => (
  <ScrollView style={styles.container}>
    <Logo />
    <View style={[styles.viewContainer]}>
      <RegisterForm />
    </View>
  </ScrollView>
);

export default Register;
