
class ProductController {
    constructor(currentId = 0, ){
        this.currentId = currentId;
        this.product = [];
    }

    addProduct(picUrl, name, usedFor, price){
        let newProduct = {
            id: this.currentId++,
            picUrl,
            name,
            usedFor,
            price
        }
        this.product.push(newProduct);
        this.setLocalStorage()
    }

    setLocalStorage(){
        let storeProduct = JSON.stringify(this.product);
        localStorage.setItem("product", storeProduct);
        let currentId = JSON.stringify(this.currentId);
        localStorage.setItem("currentId", currentId);

    }

    loadLocalStorage(){
        if(localStorage.getItem("product")){
            let productArrayJson = localStorage.getItem("product");
            console.log(productArrayJson)
            console.log(JSON.parse(productArrayJson))
            this.gear = JSON.parse(productArrayJson);
        }
        if(localStorage.getItem("currentId")){
            let currentIdString = localStorage.getItem("currentId");
            this.currentId = Number(currentIdString);
        }
 
     }
}