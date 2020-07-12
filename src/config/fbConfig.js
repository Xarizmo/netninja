import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCk2-Ey94JPnZv1_6EoSxHuo2VYjFoTtGs",
  authDomain: "net-ninja-marioplan-6fe55.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-6fe55.firebaseio.com",
  projectId: "net-ninja-marioplan-6fe55",
  storageBucket: "net-ninja-marioplan-6fe55.appspot.com",
  messagingSenderId: "354368230801",
  appId: "1:354368230801:web:6aba5dc7bfe6776a1d3630"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;