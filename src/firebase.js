import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAwzgQknX3XSZwqmYDYtiHSWXQQOj7Pmos",
    authDomain: "alberthealt.firebaseapp.com",
    projectId: "alberthealt",
    storageBucket: "alberthealt.appspot.com",
    messagingSenderId: "191407902953",
    appId: "1:191407902953:web:76aad1b5c868d71cc16078"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };