// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getFirestore, collection, addDoc ,getDocs  } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDgOryKx04XCgbKPFMqtCO6zQnanTifLn4",
    authDomain: "batch-5-kausar.firebaseapp.com",
    projectId: "batch-5-kausar",
    storageBucket: "batch-5-kausar.firebasestorage.app",
    messagingSenderId: "608358743633",
    appId: "1:608358743633:web:74a20366284eff05154270"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log("app",app)

  const db = getFirestore(app)
  console.log("db",db)




  async function addUser (){

try {
    let signupName = document.getElementById("signupName")
    let signupEmail = document.getElementById("signupEmail")
    let signupPassword = document.getElementById("signupPassword")

let userObj = {
    name: signupName.value,
    email: signupEmail.value,
    pass: signupPassword.value,
}


const addUserDoc = await addDoc(collection(db,"users"),userObj)
alert("User Added Successfully")
console.log("addUserDoc",addUserDoc)

} catch (error) {
    console.log("error",error)
}


  }


  const signupBtn = document.getElementById("signupBtn")
  signupBtn.addEventListener("click",addUser)


  const getUsers = async () =>{

    const users = await getDocs(collection(db,"users"))
    users.forEach(element => {
        let user = element.data()
        console.log(user.email)
    });

  }

  const loginBtn = document.getElementById("loginBtn")
  loginBtn.addEventListener("click",getUsers)