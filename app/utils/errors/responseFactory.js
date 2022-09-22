import errorCodes from './codes';
import errorMessages from './index';

export default ({ errorCode: errCode }) => {
  let errorCode = errCode;
  // Just in case if any new unknown error happened. Avoid a possible crash with this
  if (!Object.values(errorCodes).includes(errorCode)) errorCode = 'unknown';

  return {
    code: errorCode,
    message: errorMessages[errorCode],
  };
};
