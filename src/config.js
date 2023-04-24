import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCcveYt0GjKB1nro9Y2VFBjaF9bCSH3QeU",
  authDomain: "lawxsttt-25051.firebaseapp.com",
  projectId: "lawxsttt-25051",
  storageBucket: "lawxsttt-25051.appspot.com",
  messagingSenderId: "942542346392",
  appId: "1:942542346392:web:1afa83e4e95cb7c96758ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
export const provider = new GoogleAuthProvider()