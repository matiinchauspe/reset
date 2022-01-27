import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'firebase-config';

const loginRequest = (email, password) => signInWithEmailAndPassword(auth, email, password);

export { loginRequest };
