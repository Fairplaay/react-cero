import { firebaseAuth, ref } from '~/src/data/config'
const saveUser = (user) => {
  ref.child().set({})
}

const auth = (email, pass) => {
  firebaseAuth()
    .createUserWithEmailAndPassword(email, pass)
    .then(saveUser)
}

const login = (email, pass) => firebaseAuth().signInWithEmailAndPassword(email, pass)

const logout = () => firebaseAuth().signOut()

const resetPass = (email) => firebaseAuth().sendPasswordResetEmail(email)

export {saveUser, auth, login, logout, resetPass}
