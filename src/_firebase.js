// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLNbew0wF1CUlhOPZ3GxePNNKIMSYA5QA",
  authDomain: "games-3404e.firebaseapp.com",
  projectId: "games-3404e",
  storageBucket: "games-3404e.appspot.com",
  messagingSenderId: "213187436342",
  appId: "1:213187436342:web:f58906674dc878d1dcdd97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (location.hostname === "127.0.0.1") {
  console.log('EMULATOR')

  const db = getFirestore(app);
  const auth = getAuth(app);

  connectFirestoreEmulator(db, '127.0.0.1', 8080);
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

export default app