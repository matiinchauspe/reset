import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'native-base';

const appearance = {
  error: {
    bg: 'error.500',
    color: 'muted.50',
  },
  success: {
    bg: 'emerald.500',
    color: 'muted.50',
  },
};

const Toast = ({ message, type }) => (
  <Box bg={appearance[type].bg || appearance.error.bg} px="2" py="1" rounded="sm" mb={5}>
    <Text fontSize="sm" bold color={appearance[type].color || appearance.error.color}>
      {message}
    </Text>
  </Box>
);

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'success']),
};

Toast.defaultProps = {
  type: 'error',
};

export default Toast;
