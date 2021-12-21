import React from "react";
import { View, ScrollView, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";

import { LoginForm, CreateAccount, SocialMedia } from "@components/auth/login";
import { Divider } from "@components/shared";

import styles from "./Login.styles";

const Login = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={[styles.logo, styles.marginTop20]}
      />
      <View style={[styles.viewContainer, styles.marginTop20]}>
        <LoginForm />
        <CreateAccount />
      </View>
      <Divider />
      <View style={styles.viewContainer}>
        <SocialMedia />
      </View>
    </ScrollView>
  );
};

export default Login;
