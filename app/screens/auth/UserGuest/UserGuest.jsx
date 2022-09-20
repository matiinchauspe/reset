import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import styles from './UserGuest.styles';

const UserGuest = () => {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      {/* <Image
        source={require("../../../assets/img/user-guest.jpg")}
        resizeMode="contain"
        style={styles.image}
      /> */}
      <Text style={styles.title}>Consulta tu perfil de reset</Text>
      <Text style={styles.description}>Mira acerca de los planes que poder seguir y más.</Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Ver tu perfil"
          onPress={() => navigation.navigate('login')}
        />
      </View>
    </ScrollView>
  );
};

export default UserGuest;
