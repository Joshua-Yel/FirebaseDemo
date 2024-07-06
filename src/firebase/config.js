import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAQBowNXoBVMhyI22vJaIJimRHuG1tCKeY",
  authDomain: "test-1716c.firebaseapp.com",
  projectId: "test-1716c",
  storageBucket: "test-1716c.appspot.com",
  messagingSenderId: "549382057644",
  appId: "1:549382057644:web:32dbc894f98c012326b909",
  measurementId: "G-P6ENJQ86SD"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}