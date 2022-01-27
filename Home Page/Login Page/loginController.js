class loginController {
    constructor(currentID = 0){
        this.currentID = currentID;
        this.loginArray = [];
    }

    storeLogin(username, password){
        let userLogin = {
            username: this.currentID++,
            password,
        }

        this.loginArray.push(userLogin);
    }
} 