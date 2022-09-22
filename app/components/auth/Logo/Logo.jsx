import React from 'react';
import { View, Image } from 'react-native';

import styles from './Logo.styles';

const Logo = () => (
  <View>
    <Image
      source={require('../../../../assets/img/logo.png')}
      resizeMode="cover"
      style={[styles.logo, styles.marginTop20]}
    />
  </View>
);

export default Logo;
