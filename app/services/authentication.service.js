// @Firebase authentication service

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from 'firebase-initialize';
import errorFactory from 'utils/errors/responseFactory';

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
        error: errorFactory({ errorCode: error.code }),
      };
    });

const logoutRequest = () =>
  auth
    .signOut()
    .then(() => {
      return {
        data: null,
        error: null,
      };
    })
    .catch((error) => {
      return {
        data: null,
        error: errorFactory({ errorCode: error.code }),
      };
    });

// eslint-disable-next-line no-unused-vars
const registerRequest = ({ password, ...userData }) =>
  createUserWithEmailAndPassword(auth, password);

export { loginRequest, logoutRequest, registerRequest, onAuthStateInit };
