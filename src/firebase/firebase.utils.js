import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const config = {
    apiKey: "AIzaSyCFEyyjXaXoul_WG1N7lmMaAsHJCscHw7o",
    authDomain: "crwn-db-cc8d7.firebaseapp.com",
    projectId: "crwn-db-cc8d7",
    storageBucket: "crwn-db-cc8d7.appspot.com",
    messagingSenderId: "892535206257",
    appId: "1:892535206257:web:91cea4469650c9a2d606d0",
    measurementId: "G-R6K8XM5CNH"
};

const app = initializeApp(config);

export const googleProvider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const firestore = getFirestore(app);

googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const createUserProfileDocument = async (
  userAuthObj,
  additionalData
) => {
  if (!userAuthObj) return;
  const userRef = doc(firestore, "users", userAuthObj.uid);
  const snapShotExsist = await (await getDoc(userRef)).exists();
  if (!snapShotExsist) {
    const { displayName, email } = userAuthObj;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};