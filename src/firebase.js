import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDmIT9E3DI69rBBd0ZbjIEdUWWmf4Upc_Q",
  authDomain: "chat-c1ea7.firebaseapp.com",
  projectId: "chat-c1ea7",
  storageBucket: "chat-c1ea7.appspot.com",
  messagingSenderId: "453038693682",
  appId: "1:453038693682:web:f07078918a67ef59954b2b"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();