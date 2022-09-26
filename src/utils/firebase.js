import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA5h0Jz1qO6L8qFkUP4ilOqMDXvz0x_nJQ",
    authDomain: "coders-ecommerce.firebaseapp.com",
    projectId: "coders-ecommerce",
    storageBucket: "coders-ecommerce.appspot.com",
    messagingSenderId: "281053525322",
    appId: "1:281053525322:web:6978c6a88453e3f652fdb3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connection Firebase
export const db = getFirestore(app)

