import { FirebaseApp, getApp, initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { FirebaseConfig } from './Constants';

class FirebaseTools {
  public readonly app: FirebaseApp;

  constructor() {
    this.app = initializeApp(FirebaseConfig)
  }

  async authGoogle() {
    const googleProvider = new GoogleAuthProvider()
      .addScope('https://www.googleapis.com/auth/contacts.readonly')
    const authData = getAuth(this.app)
    return signInWithRedirect(authData, googleProvider).then(res => console.log(res))

  }
}

export default FirebaseTools;