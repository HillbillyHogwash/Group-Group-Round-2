// start by creating an instance of your class
const loginManager = new loginController();

loginManager.storeLogin();

let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');

// I am not quite sure what to do for the eventListener. I will update it soon.

// submitLoginBtn.addEventListener("click", function(event){
//     event.preventDefault();

//     let gearURL = document.getElementById("gearURL");
//     let gearURL = document.getElementById("gearType");


//     gearManager.addGear(gearURL.value, gearType.value, gearPrice.value, gearUsedFor.value);

//     gearURL.value = "";
//     gearType.value = "";
//     gearPrice.value = "";
//     gearUsedFor.value = "";

// })