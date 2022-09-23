import { db } from 'firebase-initialize';

export const getUser = () => {};

export const addExtraInformationToUser = (userCredential, data) =>
  db.collection('users_information').doc(userCredential.doc.uid).set({
    age: data.age,
    genre: data.genre,
    name: data.name,
  });
