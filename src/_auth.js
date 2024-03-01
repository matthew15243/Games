import app from './_firebase.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(app)

onAuthStateChanged(auth, user => {
    /*if (user) {
        clientUser = user;
    }
    else {
        window.location.href = "/";
    }*/

    if (!user) {
        window.location.href = "/";
    }
})