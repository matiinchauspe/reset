import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'firebase-initialize';

const loginRequest = (email, password) => signInWithEmailAndPassword(auth, email, password);

const logoutRequest = () => auth.signOut();

// eslint-disable-next-line no-unused-vars
const registerRequest = ({ password, ...userData }) =>
  createUserWithEmailAndPassword(auth, password);

export { loginRequest, logoutRequest, registerRequest };
