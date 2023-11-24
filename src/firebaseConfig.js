import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB-fynUa2bq56wFMgMgxL8D9IABBeEW7Hc",
    authDomain: "samuchatapp-2b983.firebaseapp.com",
    projectId: "samuchatapp-2b983",
    storageBucket: "samuchatapp-2b983.appspot.com",
    messagingSenderId: "967712699490",
    appId: "1:967712699490:web:13d711bf65e34d8dea0d3b"
  };
  export const app = initializeApp(firebaseConfig);
  export default firebaseConfig;
  export const auth = getAuth(app);
  export const databaseApp = getFirestore(app);
 
  