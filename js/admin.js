let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    {
        id: 1,
        productName: "Aural Series",
        productDescription: "TWS BT Over-The-Ear Headphones",
        productQuantity: 40,
        productPrice: 300
    },
    {
        id: 2,
        productName: "Silenco Series",
        productDescription: "Noise Cancelling BT Headphones",
        productQuantity: 40,
        productPrice: 1300
    },
    {
        id: 3,
        productName: "Sonata Series",
        productDescription: "Noise Cancelling Headphones",
        productQuantity: 40,
        productPrice: 800
    },
    {
        id: 4,
        productName: "Taurus Series",
        productDescription: "True Wireless Stereo Earbuds",
        productQuantity: 40,
        productPrice: 500
    },
    {
        id: 5,
        productName: "Ore Series",
        productDescription: "True Wireless Earphones",
        productQuantity: 40,
        productPrice: 600
    },
    {
        id: 6,
        productName: "Jonagold Series",
        productDescription: "iPhone Compatible Earphones",
        productQuantity: 40,
        productPrice: 500
    },
    {
        id: 7,
        productName: "Mamba Seriesr",
        productDescription: "Portable Bluetooth Speake",
        productQuantity: 30,
        productPrice: 400
    },
    {
        id: 8,
        productName: "Gemini Series",
        productDescription: "TWS Twin Pack Mini Speakers",
        productQuantity: 30,
        productPrice: 500
    },
    {
        id: 9,
        productName: "Adder Series",
        productDescription: "Waterproof Bluetooth Speaker",
        productQuantity: 30,
        productPrice: 1500
    },
    {
        id: 10,
        productName: "Weave Series",
        productDescription: "1.2m, 4-In-1 Cable",
        productQuantity: 50,
        productPrice: 200
    },
    {
        id: 11,
        productName: "Iron Series",
        productDescription: "USB Type-C to USB-C Cable",
        productQuantity: 50,
        productPrice: 150
    },
    {
        id: 12,
        productName: "Iron Series",
        productDescription: "1.2m, 3-in-1 Cable",
        productQuantity: 50,
        productPrice: 200
    },
];

function displayProducts(){
    let tbody = document.querySelector('tbody');
    Object.keys(products).forEach( (item)=>{
        if(products.length){
            console.log(`${item}: ${products[item]}`);
            tbody.innerHTML +=
            `
            <tr>
            <td>${products[item].id}</td>
            <td>${products[item].productName}</td>
            <td>${products[item].productDescription}</td>
            <td>${products[item].productQuantity}</td>
            <td>R${products[item].productPrice}</td>
            <td><button>Edit</button> <button onclick="deleteProduct">Delete</button></td>
            </tr>
            `
        }
    })
}

displayProducts()

function deleteProduct() {
    
}

