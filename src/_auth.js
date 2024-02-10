import app from './_firebase.js'
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const auth = getAuth(app)

onAuthStateChanged(auth, user => {
    if (user) {
        console.log(user);
    }
    else {
        window.location.href = "/";
    }
})


