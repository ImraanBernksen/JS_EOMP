let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        productImage: "/images/headphones1.jpg",
        productName: "Aural Series",
        productDescription: "TWS BT Over-The-Ear Headphones",
        productPrice: 300
    },
    {
        id: 2,
        productImage: "/images/headphones2.jpg",
        productName: "Silenco Series",
        productDescription: "Noise Cancelling BT Headphones",
        productPrice: 1300
    },
    {
        id: 3,
        productImage: "/images/headphones3.jpg",
        productName: "Sonata Series",
        productDescription: "Noise Cancelling Headphones",
        productPrice: 800
    },
    {
        id: 4,
        productImage: "/images/earphones1.jpg",
        productName: "Taurus Series",
        productDescription: "True Wireless Stereo Earbuds",
        productPrice: 500
    },
    {
        id: 5,
        productImage: "/images/earphones2.jpg",
        productName: "Ore Series",
        productDescription: "True Wireless Earphones",
        productPrice: 600
    },
    {
        id: 6,
        productImage: "/images/earphones3.jpg",
        productName: "Jonagold Series",
        productDescription: "iPhone Compatible Earphones",
        productPrice: 500
    },
    {
        id: 7,
        productImage: "/images/speakers1.jpg",
        productName: "Mamba Seriesr",
        productDescription: "Portable Bluetooth Speake",
        productPrice: 400
    },
    {
        id: 8,
        productImage: "/images/speakers2.jpg",
        productName: "Gemini Series",
        productDescription: "TWS Twin Pack Mini Speakers",
        productPrice: 500
    },
    {
        id: 9,
        productImage: "/images/speakers3.jpg",
        productName: "Adder Series",
        productDescription: "Waterproof Bluetooth Speaker",
        productPrice: 1500
    },
    {
        id: 10,
        productImage: "/images/cable1.jpg",
        productName: "Weave Series",
        productDescription: "1.2m, 4-In-1 Cable",
        productPrice: 200
    },
    {
        id: 11,
        productImage: "/images/cable2.jpg",
        productName: "Iron Series",
        productDescription: "USB Type-C to USB-C Cable",
        productPrice: 150
    },
    {
        id: 12,
        productImage: "/images/cable3.jpg",
        productName: "Iron Series",
        productDescription: "1.2m, 3-in-1 Cable",
        productPrice: 200
    },
];

function displayProducts(){
    let tbody = document.querySelector('#items_cards');
    Object.keys(products).forEach( (item)=>{
        if(products.length){
            console.log(`${item}: ${products[item]}`);
            tbody.innerHTML +=
            `
            <div class="card col-4">
            <img src="${products[item].productImage}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${products[item].productName} - ${products[item].productDescription}</h5>
            <p class="card-text text-center">R${products[item].productPrice} <button class="bg-dark text-white">Checkout</button></p>
            </div>
            </div>
            `
        }
    })
}

displayProducts()

localStorage.setItem('products', JSON.stringify(products));

let prods = JSON.parse(localStorage.getItem('products'))