// @Firebase authentication service
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

import { auth } from '@firebase-utils/firebase.init';
import { Queries, Constants as FBConstants } from '@firebase-utils';
import errorFactory from '@utils/errors/responseFactory';

// @handlers
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

    await Queries.setDocument({
      collectionName: FBConstants.COLLECTION_NAMES.USERS,
      id: user.uid,
      dataToReplace: { name: restUserData.name },
    });

    return { data: 'success', error: null };
  } catch (error) {
    return {
      data: null,
      error: errorFactory({ errorCode: error.code }),
    };
  }
};

export { loginRequest, logoutRequest, registerRequest };
