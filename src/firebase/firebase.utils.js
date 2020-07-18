import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBCLO2HgxVCR2kSdd-A6crkPyF9JHaSbR4",
  authDomain: "crwn-db-bb6c5.firebaseapp.com",
  databaseURL: "https://crwn-db-bb6c5.firebaseio.com",
  projectId: "crwn-db-bb6c5",
  storageBucket: "crwn-db-bb6c5.appspot.com",
  messagingSenderId: "539590023256",
  appId: "1:539590023256:web:d427caed35777f97d4122d",
  measurementId: "G-N6NX4SCKE0"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase