import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default {
  googleLogar: async () => {
    const provider = new GoogleAuthProvider();
    try {
      const auth = getAuth();
      let result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
    
      console.error(error);
      return null;
    }
  },
};
