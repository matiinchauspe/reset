import React from 'react';
import { Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Icon Factory depending on field name
const IconInput = ({ fieldName }) => {
  const icon = {
    email: (
      <Icon as={<MaterialCommunityIcons name="email-outline" />} size={5} color="#c1c1c1" ml={1} />
    ),
    name: (
      <Icon
        as={<MaterialCommunityIcons name="account-outline" />}
        size={5}
        color="#c1c1c1"
        ml={1}
      />
    ),
    age: (
      <Icon
        as={<MaterialCommunityIcons name="account-plus-outline" />}
        size={5}
        color="#c1c1c1"
        ml={1}
      />
    ),
    weight: <Icon as={<MaterialCommunityIcons name="weight" />} size={5} color="#c1c1c1" ml={1} />,
  };

  return icon[fieldName] || icon.email;
};

export default IconInput;
