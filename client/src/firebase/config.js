import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD75BCIHcFxriWLieUYpRXJ87J1KMbqFTo",
  authDomain: "doanhoikhkttt.firebaseapp.com",
  projectId: "doanhoikhkttt",
  storageBucket: "doanhoikhkttt.appspot.com",
  messagingSenderId: "375829953134",
  appId: "1:375829953134:web:c02bb7636a0e481e3a847f",
  measurementId: "G-46BJPNQEN3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
export default firebase;