import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";
import { Input, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

import styles from "./RegisterForm.styles";
// import Loading from "../Loading";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    "password-repeat": "",
  });
  // const [loading, setLoading] = useState(false);
  // const navigation = useNavigation();

  const onChange = ({ nativeEvent }, type) => {
    const text = nativeEvent.text;
    setFormData({ ...formData, [type]: text });
  };

  const onRegister = () => {
    console.log("OK!");
  };

  return (
    <View style={styles.formContainer}>
      <View style={[styles.inputContainer, styles.marginBottom5]}>
        <Input
          placeholder="Email"
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="email-outline" />}
              size={5}
              color="#c1c1c1"
              ml={1}
            />
          }
          h={10}
          color="#c1c1c1"
          _focus={{ borderColor: "#34d399" }}
          onChange={(text) => onChange(text, "email")}
        />
      </View>
      <View style={[styles.inputContainer, styles.marginBottom5]}>
        <Input
          placeholder="Nombre y apellido"
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="account-circle-outline" />}
              size={5}
              color="#c1c1c1"
              ml={1}
            />
          }
          h={10}
          color="#c1c1c1"
          _focus={{ borderColor: "#34d399" }}
          onChange={(text) => onChange(text, "name")}
        />
      </View>
      <View style={[styles.inputContainer, styles.marginBottom5]}>
        <Input
          type="password"
          placeholder="Contraseña"
          textContentType="oneTimeCode"
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="account-lock-outline" />}
              color="#c1c1c1"
              size={5}
              ml={1}
            />
          }
          h={10}
          color="#c1c1c1"
          _focus={{ borderColor: "#34d399" }}
          onChange={(text) => onChange(text, "password")}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          type="password"
          placeholder="Repetir contraseña"
          textContentType="oneTimeCode"
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="account-lock-outline" />}
              color="#c1c1c1"
              size={5}
              ml={1}
            />
          }
          h={10}
          color="#c1c1c1"
          _focus={{ borderColor: "#34d399" }}
          onChange={(text) => onChange(text, "password-repeat")}
        />
      </View>
      <Pressable style={styles.btn} onPress={onRegister}>
        <Text style={styles.btnText}>Registrarse</Text>
      </Pressable>
    </View>
  );
};

export default RegisterForm;
