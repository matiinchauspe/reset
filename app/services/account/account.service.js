// @Firebase authentication service
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
// TODO: remove this from here later
import { collection, doc, setDoc } from 'firebase/firestore';

import { auth, db } from 'firebase-initialize';
import errorFactory from 'utils/errors/responseFactory';
// import * as AccountTransform from './account.transform';

// @handlers
const onAuthStateInit = () =>
  new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(Boolean(user));
    });
  });

const loginRequest = async (email, password) => {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);

    return { data: userData, error: null };
  } catch (error) {
    return { data: null, error: errorFactory({ errorCode: error.code }) };
  }
};

const logoutRequest = async () => signOut(auth);

const registerRequest = async ({ email, passwordRepeated: password, ...restUserData }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;
    const colRef = collection(db, 'users_information');

    await setDoc(doc(colRef, user.uid), { name: restUserData.name });

    return { data: 'success', error: null };
  } catch (error) {
    return {
      data: null,
      error: errorFactory({ errorCode: error.code }),
    };
  }
};

export { loginRequest, logoutRequest, registerRequest, onAuthStateInit };
