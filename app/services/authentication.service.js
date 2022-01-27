// import * as firebase from "firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@firebase';

const loginRequest = (email, password) => signInWithEmailAndPassword(auth, email, password);

export { loginRequest };
