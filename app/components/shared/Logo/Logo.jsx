import React from 'react';
import { View, Image } from 'native-base';
import { Asset } from 'expo-asset';

const imageURI = Asset.fromModule(require('assets/img/logo.png'));

const Logo = () => (
  <View>
    <Image source={imageURI} resizeMode="cover" h={250} alt="Reset logo" />
  </View>
);

export default Logo;
