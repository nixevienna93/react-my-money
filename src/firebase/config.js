import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDf-1jlv4vKIre6BB8eKXnoSM292rvJMzI",
  authDomain: "mymoney-5369d.firebaseapp.com",
  projectId: "mymoney-5369d",
  storageBucket: "mymoney-5369d.appspot.com",
  messagingSenderId: "1025184231762",
  appId: "1:1025184231762:web:e6872297534ba8f9104a8b"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }