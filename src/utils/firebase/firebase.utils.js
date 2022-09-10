import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCMD9JII9qE0HyNmNtFj9xK9tajP1C2j_8",
    authDomain: "tut03-75b00.firebaseapp.com",
    projectId: "tut03-75b00",
    storageBucket: "tut03-75b00.appspot.com",
    messagingSenderId: "720960996396",
    appId: "1:720960996396:web:6df71324c70726b5c5bd89"
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot);
    console.log(userSnapshot.exists);

    if (!userSnapshot.exists()) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log(error.message);
        }
    }

}