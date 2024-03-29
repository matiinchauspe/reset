import errorCodes from './codes';

const errorMessages = {
  [errorCodes.INVALID_EMAIL]: 'Las credenciales no son válidas',
  [errorCodes.USER_NOT_FOUND]: 'Las credenciales no son válidas',
  [errorCodes.WRONG_PASSWORD]: 'Las credenciales no son válidas',
  unknown: 'Error inesperado, vuelva a intentarlo',
};

export default errorMessages;
