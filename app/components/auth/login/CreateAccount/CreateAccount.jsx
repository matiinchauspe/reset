import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./CreateAccount.styles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <Text style={styles.textRegister}>
      Aún no tienes una cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Regístrate
      </Text>
    </Text>
  );
};

export default CreateAccount;
