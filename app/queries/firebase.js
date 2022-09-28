import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from 'firebase-initialize';

const getUser = () => {};

const addExtraInformationToUser = async (authId, { name }) => {
  debugger; // eslint-disable-line
  const colRef = collection(db, 'users_information');
  await setDoc(
    doc(colRef, authId, {
      name,
    })
  );
};

export { getUser, addExtraInformationToUser };
