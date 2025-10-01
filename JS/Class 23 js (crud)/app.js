    // Get modal element
let myModalEl = document.getElementById("exampleModal");

// Initialize modal
let myModal = new bootstrap.Modal(myModalEl);

const addNewUser = () => {
  const firstName = document.getElementById("firstName");
  const email = document.getElementById("email");
  const course = document.getElementById("course");

if(!firstName?.value || !email?.value || !course?.value){
    alert("Please fill all the fields")
    return;
}



  const user = {
    firstName: firstName?.value,
    email: email?.value,
    course: course?.value,
  };

let savedUsers = window.localStorage.getItem("user");
savedUsers = JSON.parse(savedUsers) || []

if(currentEditIndex !== null){
  savedUsers[currentEditIndex] = user;
}else{
savedUsers.push(user)

}


  window.localStorage.setItem("user", JSON.stringify(savedUsers));
  alert("User added successfully");

    firstName.value = "";
    email.value = "";
    course.value = "";

    myModal.hide();
    updateTable()
};


const updateTable = ()=>{
    let savedUsers = window.localStorage.getItem("user");
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""
    savedUsers = JSON.parse(savedUsers) || []
    savedUsers.forEach((user,index)=>{
        tableBody.innerHTML += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${user.firstName}</td>
            <td>${user.email}</td>
            <td>${user.course}</td>
            <td>
              <button class="btn btn-warning" onclick="editUser(${index})">Edit</button>
            </td>
            <td>
              <button class="btn btn-danger" id="${index+1}" onclick="deleteUser(this)">Delete</button>
            </td>
          </tr>
        `
        console.log(user.firstName);
    })


}
updateTable()


const deleteUser = (e)=>{
console.log("delete user",e.id);

let savedUsers = window.localStorage.getItem("user");
savedUsers = JSON.parse(savedUsers) || []
// savedUsers.splice(e.id-1,1)

savedUsers = savedUsers.filter((user,index)=> index !==e.id-1)
console.log("after delete",savedUsers);

window.localStorage.setItem("user", JSON.stringify(savedUsers));
updateTable()
}

var currentEditIndex = null;
const editUser = (index)=>{

    let savedUsers = window.localStorage.getItem("user");
    savedUsers = JSON.parse(savedUsers) || []
    const user = savedUsers[index]
    console.log("edit user",user);

  const firstName = document.getElementById("firstName");
  const email = document.getElementById("email");
  const course = document.getElementById("course");

    firstName.value = user.firstName
    email.value = user.email
    course.value = user.course  

    currentEditIndex = index;

    // Change button text to "Update"
    const saveButton = document.querySelector("#exampleModal .btn-primary");
    saveButton.textContent = "Update";

    // saveButton.onclick = function() {
    //   updateUser();
    // }


// 👉 Open the modal
myModal.show();
  
  }

//  const updateUser = () => {

//   const updateBtn = document.querySelector("#exampleModal .btn-primary");
//   updateBtn.addEventListener("click", () => {
//     let savedUsers = window.localStorage.getItem("user");
//     savedUsers = JSON.parse(savedUsers) || [];
//     const firstName = document.getElementById("firstName");
//     const email = document.getElementById("email");
//     const course = document.getElementById("course"); 

//     savedUsers[currentEditIndex] = {
//       firstName: firstName.value,
//       email: email.value,
//       course: course.value,
//     };

//     window.localStorage.setItem("user", JSON.stringify(savedUsers));
//     alert("User updated successfully"); 

//     updateTable()
    
//   })
// }
