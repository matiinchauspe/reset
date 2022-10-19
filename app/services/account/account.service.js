// @Firebase authentication service
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from 'firebase/auth';
// import * as Facebook from 'expo-facebook';

import { auth, fbProvider } from '@firebase-utils/firebase.init';
import { Queries, Constants as FBConstants } from '@firebase-utils';
import errorFactory from '@utils/errors/responseFactory';
// import { URLs, FACEBOOK_PERMISSIONS } from '../constants';

// const { FACEBOOK_APP_ID } = process.env;

// @handlers
const loginRequest = async (email, password) => {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    // TODO: remove this later
    // if (!userData.user.emailVerified) {
    //   return {
    //     data: null,
    //     error: 'Need to verify your account',
    //   };
    // }

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
    // Send verification email to the user
    await sendEmailVerification(user);

    return { data: 'success', error: null };
  } catch (error) {
    return {
      data: null,
      error: errorFactory({ errorCode: error.code }),
    };
  }
};

// @Facebook
const loginWithFacebookRequest = async () => {
  try {
    debugger; // eslint-disable-line
    return signInWithRedirect(auth, fbProvider);
    debugger; // eslint-disable-line
    // This will trigger a full page redirect away from your app
    // After returning from the redirect when your app initializes you can obtain the result
    const result = await getRedirectResult(auth);
    if (result) {
      debugger; // eslint-disable-line
      // This is the signed-in user
      const { user } = result;
      // This gives you a Facebook Access Token.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      return {
        data: user,
        error: null,
      };
    }
  } catch (error) {
    alert(`Facebook Login Error: ${error.message}`);
    return {
      data: null,
      error: errorFactory({ errorCode: error.code }),
    };
  }
};

export { loginRequest, logoutRequest, registerRequest, loginWithFacebookRequest };
