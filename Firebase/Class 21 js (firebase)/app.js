import {
  db,
  addDoc,
  collection,
  auth,
  createUserWithEmailAndPassword,
} from "./firebase.js";

// let addBtn = document.getElementById("addBtn")
// addBtn.addEventListener("click",addUser)

//   const getUsers = async () => {
//       const usersData = await getDocs(collection(db, "users"))
//       usersData.forEach(doc => {
//           console.log("doc",doc.data())

//       });
//   }
//   let getUsersBtn = document.getElementById("getUsersBtn")
// getUsersBtn.addEventListener("click",getUsers)

const addUser = async (name, email, pass) => {
  try {
    const userObj = {
      name,
      email,
      pass,
    };
    const addUserDoc = await addDoc(collection(db, "users"), userObj);
    console.log("addUserDoc", addUserDoc);
  } catch (error) {
    console.log("error", error);
  }
};

const signupFunc = async (ele) => {
  try {
    ele.preventDefault();

    const signupName = document.getElementById("signup-name").value;
    const signupEmail = document.getElementById("signup-email").value;
    const signupPassword = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (signupPassword !== confirmPassword) {
      alert("Password and Confirm Password doesn't match...!");
      return;
    }
    const signupUser = await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword
    );

    if (signupUser) {
      addUser(signupName, signupEmail, signupPassword);
    }

    alert("User Successfully Signed up");
  } catch (error) {
    // alert("error", error.message);
    console.log("error", error.code);
  }
};

const createAccForm = document.getElementById("createAccForm");
createAccForm.addEventListener("submit", signupFunc);



