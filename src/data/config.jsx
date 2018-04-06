import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB9_vjwE7mm4M9dUZsUWwPpkoVTMVqzcFM',
  authDomain: 'edteam-react.firebaseapp.com',
  databaseURL: 'https://edteam-react.firebaseio.com',
  projectId: 'edteam-react',
  storageBucket: 'edteam-react.appspot.com',
  messagingSenderId: '550277899710'
}
firebase.initializeApp(config)
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
