import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDBCtzDvUyidGdFNQHSE4AKlL0wTluM6u8',
  authDomain: 'authentication-vue-fc09c.firebaseapp.com',
  projectId: 'authentication-vue-fc09c',
  storageBucket: 'authentication-vue-fc09c.appspot.com',
  messagingSenderId: '39929267547',
  appId: '1:39929267547:web:7e9cba609dc7fe4445067e',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
