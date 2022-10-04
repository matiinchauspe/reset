import React from 'react';
import { Center, Spinner, Heading, HStack } from 'native-base';

const LoadingSection = () => (
  <Center height="100%" bg="inherit">
    <HStack space={2} alignItems="center">
      <Spinner size="lg" />
      <Heading color="primary.600" fontSize="lg">
        {/* eslint-disable-line react-native/no-raw-text */}
        Cargando...
      </Heading>
    </HStack>
  </Center>
);

export default LoadingSection;
