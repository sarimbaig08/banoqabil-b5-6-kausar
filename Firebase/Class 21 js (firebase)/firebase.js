 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getFirestore,collection, addDoc, getDocs   } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
  import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAY9ECts1Ik19qhS_-FUKwgbZ1rHSfpY5M",
    authDomain: "ecommer-website-97e24.firebaseapp.com",
    projectId: "ecommer-website-97e24",
    storageBucket: "ecommer-website-97e24.firebasestorage.app",
    messagingSenderId: "795232900014",
    appId: "1:795232900014:web:fa0d60535d4144dd04ee3f"
  };

  // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app)
   const auth = getAuth(app);

export  {addDoc,collection,auth,db,createUserWithEmailAndPassword}
