const userRegInputManager = new userRegController();

userRegInputManager.addNewUser();

let userRows = document.getElementById('userRows');
let addUserBtn = document.getElementById('addUserButton');

addUserBtn.addEventListener("click", function(event){
    event.preventDefault();

    let regFirstName = document.getElementById("regFirstName");
    let regLastName = document.getElementById("regLastName");
    let regEmail = document.getElementById("regEmail");
    let regPassword = document.getElementById("regPassword");
    let regConfirmPassword = document.getElementById("regConfirmPassword");
    let regAddress = document.getElementById("regAddress");
    let regAddress2 = document.getElementById("regAddress2");
    let regCity = document.getElementById("regCity");
    let regCountry = document.getElementById("regCountry");
    let regState = document.getElementById("regState");
    let regZip = document.getElementById("regZip");
    let regPhoneNumber = document.getElementById("regPhoneNumber");

    userRegInputManager.addNewUser(regFirstName.value, regLastName.value, regEmail.value, regPassword.value, regConfirmPassword.value, regAddress.value, regAddress2.value, regCity.value, regCountry.value, regState.value, regZip.value, regPhoneNumber.value );



    regFirstName.value = "";
    regLastName.value = "";
    regEmail.value = "";
    regPassword.value = "";
    regConfirmPassword.value = "";
    regAddress.value = "";
    regAddress2.value = "";
    regCity.value = "";
    regCountry.value = "";
    regState.value = "";
    regZip.value = "";
    regPhoneNumber.value = "";

    console.log(addUserBtn.regArray);

})
