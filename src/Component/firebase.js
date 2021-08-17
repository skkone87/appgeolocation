
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCHnwzcsQOzLgRL8JeaZNn3DZ7qiOGGJSU",
  authDomain: "south-telaviv.firebaseapp.com",
  databaseURL: "https://south-telaviv-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "south-telaviv",
  storageBucket: "south-telaviv.appspot.com",
  messagingSenderId: "208578303962",
  appId: "1:208578303962:web:62a7f3aada0d3358a7d2e3"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const fireDB=firebaseApp.firestore();

const storage =firebase.storage()

export{
    fireDB,storage
}