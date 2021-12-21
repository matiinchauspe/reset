import React, { useState } from "react";
import { View, TextInput as Input, Pressable, Text } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

import styles from "./LoginForm.styles";
// import Loading from "../Loading";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [loading, setLoading] = useState(false);
  // const navigation = useNavigation();

  const onChange = (text, type) => {
    setFormData({ ...formData, [type]: text });
  };

  const onSubmit = () => {
    console.log("OK!");
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        style={styles.input}
        onChangeText={(text) => onChange(text, "email")}
        rightIcon={<Icon name="at" style={styles.iconRight} />}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Contraseña"
          securityTextEntry={showPassword ? false : true}
          style={styles.input}
          onChangeText={(text) => onChange(text, "password")}
        />
        <Icon
          size={20}
          name={showPassword ? "eye-off-outline" : "eye-outline"}
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <Pressable style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </Pressable>
      {/* <Loading isVisible={loading} text="Iniciando sesión" /> */}
    </View>
  );
};

export default LoginForm;
