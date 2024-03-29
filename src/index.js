import app from './_firebase.js'
import {getAuth, connectAuthEmulator, signInWithEmailAndPassword, AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';

// Initialize the Auth instance
const auth = getAuth(app)

async function createAccount() {
	const loginEmail = document.getElementById('username').value
	const loginPassword = document.getElementById('password').value

	try {
		const userCredentials = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
		document.getElementById('errorMessage').innerHTML = ""
	}
	catch(error) {
		console.log(`Error: ${error.message}`)
	}
}

const loginEmailPassword = async () => {
	const loginEmail = document.getElementById('username').value
	const loginPassword = document.getElementById('password').value

	try {
		const userCredentials = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
		document.getElementById('errorMessage').innerHTML = ""
		window.location.href = "./lobby.html";
	}
	catch(error) {
		if (error.code == AuthErrorCodes.INVALID_PASSWORD || error.code == AuthErrorCodes.INVALID_EMAIL) {
			console.log("The Email or Password is incorrect")
			document.getElementById('errorMessage').innerHTML = "The Email or Password is incorrect"
		}
		else {
			console.log(`Error: ${error.message}`)
		}
	}
}

async function logOut() {
	await signOut(auth);
	document.getElementById('errorMessage').innerHTML = ""
}

async function monitorAuthState() {
	onAuthStateChanged(auth, user => {
		if (user) {
			console.log("signed in")
			console.log(user);
		}
		else {
			console.log("Not signed in")
		}
	})
}
monitorAuthState()


/*******************************************************************
                            Event Listeners
*******************************************************************/
document.getElementById('signin').addEventListener('click', loginEmailPassword);
document.getElementById('signup').addEventListener('click', createAccount);
document.getElementById('signout').addEventListener('click', logOut);