import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to impor the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA79EyB8vP1rPQTiaD1MD2EeZEKLicyLzw',
  authDomain: 'instagram-brick.firebaseapp.com',
  projectId: 'instagram-brick',
  storageBucket: 'instagram-brick.appspot.com',
  messagingSenderId: '136315256189',
  appId: '1:136315256189:web:1496fb414fd07b99c6e014'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (ONLY ONCE!!!!!);
// seedDatabase(firebase);

export { firebase, FieldValue };
