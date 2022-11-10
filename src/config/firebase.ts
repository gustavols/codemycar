import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAodiehbz9z-gWo8k1MXrLYx22i6qwq3Uk",
  authDomain: "codemycar-4e69a.firebaseapp.com",
  projectId: "codemycar-4e69a",
  storageBucket: "codemycar-4e69a.appspot.com",
  messagingSenderId: "583815071779",
  appId: "1:583815071779:web:b3a3397487664934f40996",
  measurementId: "G-Q5N9GMZQ92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

