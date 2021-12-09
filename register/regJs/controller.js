class userRegController {
    constructor(currentID = 0){
        this.currentID = currentID;
        this.regArray = [];
    }

    addUserRegInput(firstName, lastName, email, password, confirmPassword, address, address2, city, country, state, zip, phoneNum){
        let newRegUser = {
            id: this.currentID++,
            firstName,
            lastName,
            email, 
            password, 
            confirmPassword, 
            address, 
            address2, 
            city, 
            country, 
            state, 
            zip, 
            phoneNum
        }
        this.regUserArray.push(newRegUser);
    }
}