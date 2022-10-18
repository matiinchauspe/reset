// @Firebase authentication service
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from 'firebase/auth';
import * as Facebook from 'expo-facebook';

import { auth } from '@firebase-utils/firebase.init';
import { Queries, Constants as FBConstants } from '@firebase-utils';
import errorFactory from '@utils/errors/responseFactory';
import { URLs, FACEBOOK_PERMISSIONS } from '../constants';

const { FACEBOOK_APP_ID } = process.env;

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
    await Facebook.initializeAsync({
      appId: FACEBOOK_APP_ID,
    });
    const { type, token, expirationDate, permissions, declinedPermissions } =
      await Facebook.logInWithReadPermissionsAsync({
        permissions: FACEBOOK_PERMISSIONS,
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(URLs.replace(':token:', token));
      debugger; // eslint-disable-line
      alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

export { loginRequest, logoutRequest, registerRequest, loginWithFacebookRequest };
