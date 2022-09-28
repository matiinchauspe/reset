import React from 'react';
import { View, Center, Box, Text } from 'native-base';

import Colors from 'utils/colors';
import { Logo } from 'components/shared/Logo';

const IncomingSection = () => (
  <View height="100%" backgroundColor={Colors.zircon}>
    <Center>
      <Logo />
      <Box alignItems="center">
        <Text fontSize={19} mt={10} mb={1} color="red.300">
          INCOMING SECTION
        </Text>
      </Box>
      <Text fontFamily="body" fontSize={15} color="white">
        Esta sección por el momento esta en progreso
      </Text>
    </Center>
  </View>
);

export default IncomingSection;
