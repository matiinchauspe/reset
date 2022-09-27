import React from 'react';
import { View, Text } from 'native-base';

import Colors from 'utils/colors';

const InfoUser = ({ userInfo: { uid, displayName, email, photoURL } }) => {
  return (
    <View bgColor={Colors.charade} my={45}>
      <Text color="amber.100">Info User</Text>
    </View>
  );
};

export default InfoUser;
