import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from 'firebase-initialize';
import errorMessages from 'utils/errors';

// @handlers
const onAuthStateInit = () =>
  new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(Boolean(user));
    });
  });

const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userData) => {
      return {
        data: userData,
        error: null,
      };
    })
    .catch((error) => {
      return {
        data: null,
        error: {
          code: error.code,
          message: errorMessages[error.code],
        },
      };
    });

const logoutRequest = () => auth.signOut();

// eslint-disable-next-line no-unused-vars
const registerRequest = ({ password, ...userData }) =>
  createUserWithEmailAndPassword(auth, password);

export { loginRequest, logoutRequest, registerRequest, onAuthStateInit };
