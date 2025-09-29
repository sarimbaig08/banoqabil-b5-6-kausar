

window.onload = function() {

    let user = localStorage.getItem("userObj");
    if(user){
    //  document.write("User Logged In");
        alert("User Logged In");
}else{
        window.location.href = "index.html";
    }

};

const logoutUser = () => {
    localStorage.removeItem("userObj");
    window.location.replace("index.html");
}