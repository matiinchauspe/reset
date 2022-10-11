import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

import { db } from '@firebase-utils/firebase.init';

/**
 * It takes a collection name, an id, and some data to replace, and then it replaces the document
 * with that id in that collection with the data
 * @returns A promise that resolves to the data that was written to the document.
 */
export const setDocument = async ({ collectionName, id, dataToReplace }) => {
  const colRef = collection(db, collectionName);

  return setDoc(doc(colRef, id), dataToReplace);
};

/**
 * It gets a document from a collection in Firestore
 * @returns The data of the document
 */
export const getDocument = async ({ collectionName, id }) => {
  const colRef = collection(db, collectionName);
  const result = await getDoc(doc(colRef, id));

  return result.data();
};
