import React from "react";
import { Pressable, Text } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import styles from "./SocialMedia.styles";

const SocialMedia = () => (
  <Pressable style={styles.btn}>
    <Text style={styles.btnText}>Iniciar sesión con Facebook</Text>
    <Icon
      // button
      size={30}
      name="facebook"
      style={styles.btnIcon}
      onPress={() => console.log("Se presiono")}
    />
  </Pressable>
);

export default SocialMedia;
