import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-fynUa2bq56wFMgMgxL8D9IABBeEW7Hc",
  authDomain: "samuchatapp-2b983.firebaseapp.com",
  projectId: "samuchatapp-2b983",
  storageBucket: "samuchatapp-2b983.appspot.com",
  messagingSenderId: "967712699490",
  appId: "1:967712699490:web:13d711bf65e34d8dea0d3b"
};



const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
