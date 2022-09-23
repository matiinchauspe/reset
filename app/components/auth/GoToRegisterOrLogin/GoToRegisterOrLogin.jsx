import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Colors from 'utils/colors';

const GoToRegisterOrLogin = ({ goTo }) => {
  const navigation = useNavigation();

  const goToSection = (section) => () => navigation.navigate(section);

  return (
    <Text mt="15px" color="white" ml="10px" mr="10px">
      {goTo === 'register' && 'Aún no tienes una cuenta?'}
      {goTo === 'login' && 'Ya tienes cuenta?'} {/*eslint-disable-line */}
      <Text
        color={Colors.green}
        bold
        onPress={goToSection(goTo === 'register' ? 'register' : 'login')}
      >
        {goTo === 'register' && 'Regístrate'}
        {goTo === 'login' && 'Iniciar sesión'}
      </Text>
    </Text>
  );
};

GoToRegisterOrLogin.propTypes = {
  goTo: PropTypes.string,
};

GoToRegisterOrLogin.defaultProps = {
  goTo: 'register',
};

export default GoToRegisterOrLogin;
