// var userName = "Mirza Sarim Baig"

// window.localStorage.setItem("userName", userName)

// const lsUser = window.localStorage.getItem("userName")
// console.log(lsUser)

window.onload = function () {
  let user = localStorage.getItem("userObj");
  if (user) {
    window.location.href = "home.html";
  } 
};

const loginUser = () => {
  var userObj = {
    name: "Mirza Sarim Baig",
    age: 21,
    email: "sarimBaig@gmail.com",
  };

  window.localStorage.setItem("userObj", JSON.stringify(userObj));
  const lsUserObj = window.localStorage.getItem("userObj");
  console.log(JSON.parse(lsUserObj));

  // var userArr= ["name:Mirza Sarim Baig", "age:21", "email:sarim@gmail.com"]
  // window.localStorage.setItem("userArr",JSON.stringify(userArr))
  // const lsuserArr=window.localStorage.getItem("userArr")
  // console.log(JSON.parse(lsuserArr))
};
