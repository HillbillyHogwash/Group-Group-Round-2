// new gearManager
const productManager = new ProductController();

// DOM variables
let productList = document.getElementById("productList");
let productRows = document.getElementById("productRows");
let addProductButton = document.getElementById("addProductButton");

productManager.loadLocalStorage();



// API call to json placeholder. Will create items using this placeholder then switch out for database later.
const getProduct = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if(response.status === 200){
            return response.json();
        } else {
            console.error(response)
        }
    }).then(json => {
        createProductList(json)
        return json;
    })
}

// function for api call
// const createGearList = (json) => {
//     let gear = json;
//     console.log(gear)

//     for (let i = 0; i < gear.length; i++){
//         let newRow = document.createElement("tr")
//         newRow.innerHTML = `<tr>
//         <th scope="row">${gear[i].username}</th>
//         <td>${gear[i].name}</td>
//         <td>${gear[i].email}</td>
//         <td>${gear[i].id}</td>
//       </tr>`;
//       gearRows.append(newRow);
//     }
// }

// will be used when data persists
const createProductList = (product) => {
    for (let i = 0; i < gear.length; i++){
        let newRow = document.createElement("tr")
        newRow.innerHTML = `<tr>
        <th scope="row"><img class="img-thumbnail" src="${product[i].picUrl}"></th>
        <td>${product[i].name}</td>
        <td>${product[i].usedFor}</td>
        <td>${product[i].price}</td>
      </tr>`;
      productRows.append(newRow);
    }
}

const addItemToProductList = (product) => {
    console.log(product);
        let newRow = document.createElement("tr")
        newRow.innerHTML = `<tr>
        <th scope="row"><img class="img-thumbnail" src="${product.picUrl}"></th>
        <td>${product.name}</td>
        <td>${product.usedFor}</td>
        <td>${product.price}</td>
      </tr>`;
      productRows.append(newRow); 
}

// uncomment the function call below to run the API and populate the list of gear... It is currently a list of people because I am using a jsonPlaceHolder API
// getGear();

const loadLocalStorage = () => {
    if (localStorage.getItem("product")){
        console.log("product exists");
        let gear = JSON.parse(localStorage.getItem("product"));
        createGearList(product);
    } else {
        console.log("no product")
    }
}

addProductButton.addEventListener("click", function(event){
    event.preventDefault();
    let productURL = document.getElementById("productURL");
    let productType = document.getElementById("productType");
    let productPrice = document.getElementById("productPrice");
    let productUsedFor = document.getElementById("productUsedFor");

    productManager.addProduct(productURL.value, productType.value, productUsedFor.value, productPrice.value);
    addItemToProductList({
        picUrl: productURL.value,
        name: productType.value,
        usedFor: productUsedFor.value,
        price: productPrice.value
    });

    productURL = '';
    productType = '';
    productPrice = '';
    productUsedFor = '';
})

loadLocalStorage();