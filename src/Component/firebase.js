
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBniyLIYg33CnfB_NRJAP5KOg10qiWw4aE",
  authDomain: "geo-loaction-6334d.firebaseapp.com",
  projectId: "geo-loaction-6334d",
  storageBucket: "geo-loaction-6334d.appspot.com",
  messagingSenderId: "844835440612",
  appId: "1:844835440612:web:a5014650f0e5988c1d29f1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const fireDB = firebaseApp.firestore();

const storage = firebase.storage()

export{
    fireDB,storage
}