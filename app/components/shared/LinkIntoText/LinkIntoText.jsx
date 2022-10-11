import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Colors from '@utils/colors';

const LinkIntoText = ({ text, linkText, sectionToGo }) => {
  const navigation = useNavigation();

  const goToSection = (section) => () => navigation.navigate(section);

  return (
    <Text mt="15px" color="white" ml="10px" mr="10px">
      {text} {/*eslint-disable-line */}
      <Text color={Colors.green} onPress={goToSection(sectionToGo)}>
        {linkText}
      </Text>
    </Text>
  );
};

LinkIntoText.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  sectionToGo: PropTypes.string.isRequired,
};

export default LinkIntoText;
