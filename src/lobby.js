import app from './_firebase.js'
import { getFirestore, addDoc, collection } from "firebase/firestore";
import {getAuth, connectAuthEmulator, signInWithEmailAndPassword, AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
const db = getFirestore(app);
const auth = getAuth(app)

// Authentication
async function monitorAuthState() {
	onAuthStateChanged(auth, user => {
		if (user) {
			console.log(user);
		}
		else {
			console.log("Not signed in")
			window.location.href = "/";
		}
	})
}
monitorAuthState()