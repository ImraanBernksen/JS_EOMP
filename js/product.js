let products;
if (localStorage.getItem("products")) {
    products = localStorage.getItem("products")
} else {
    products = [
        {
            id: 1,
            productImage: "/images/headphones1.jpg",
            productName: "Aural Series",
            productDescription: "TWS BT Over-The-Ear Headphones",
            productQuantity: 40,
            productPrice: 300
        },
        {
            id: 2,
            productImage: "/images/headphones2.jpg",
            productName: "Silenco Series",
            productDescription: "Noise Cancelling BT Headphones",
            productQuantity: 40,
            productPrice: 1300
        },
        {
            id: 3,
            productImage: "/images/headphones3.jpg",
            productName: "Sonata Series",
            productDescription: "Noise Cancelling Headphones",
            productQuantity: 40,
            productPrice: 800
        },
        {
            id: 4,
            productImage: "/images/earphones1.jpg",
            productName: "Taurus Series",
            productDescription: "True Wireless Stereo Earbuds",
            productQuantity: 40,
            productPrice: 500
        },
        {
            id: 5,
            productImage: "/images/earphones2.jpg",
            productName: "Ore Series",
            productDescription: "True Wireless Earphones",
            productQuantity: 40,
            productPrice: 600
        },
        {
            id: 6,
            productImage: "/images/earphones3.jpg",
            productName: "Jonagold Series",
            productDescription: "iPhone Compatible Earphones",
            productQuantity: 40,
            productPrice: 500
        },
        {
            id: 7,
            productImage: "/images/speakers1.jpg",
            productName: "Mamba Seriesr",
            productDescription: "Portable Bluetooth Speake",
            productQuantity: 30,
            productPrice: 400
        },
        {
            id: 8,
            productImage: "/images/speakers2.jpg",
            productName: "Gemini Series",
            productDescription: "TWS Twin Pack Mini Speakers",
            productQuantity: 30,
            productPrice: 500
        },
        {
            id: 9,
            productImage: "/images/speakers3.jpg",
            productName: "Adder Series",
            productDescription: "Waterproof Bluetooth Speaker",
            productQuantity: 30,
            productPrice: 1500
        },
        {
            id: 10,
            productImage: "/images/cable1.jpg",
            productName: "Weave Series",
            productDescription: "1.2m, 4-In-1 Cable",
            productQuantity: 50,
            productPrice: 200
        },
        {
            id: 11,
            productImage: "/images/cable2.jpg",
            productName: "Iron Series",
            productDescription: "USB Type-C to USB-C Cable",
            productQuantity: 50,
            productPrice: 150
        },
        {
            id: 12,
            productImage: "/images/cable3.jpg",
            productName: "Iron Series",
            productDescription: "1.2m, 3-in-1 Cable",
            productQuantity: 50,
            productPrice: 200
        },
    ]
    localStorage.setItem('products', JSON.stringify(products))
}

function displayProducts(){
    products = JSON.parse(localStorage.getItem('products'))

    let tbody = document.querySelector('#items_cards');
    products.forEach( (item)=>{
        if(products.length){
            console.log(`${item}: ${item}`);
            tbody.innerHTML +=
            `
            <div class="card col-4">
            <img src="${item.productImage}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title text-center">${item.productName}</h5>
            <p class="card-text text-center">R${item.productPrice} <a href="../html/checkout.html" class="bg-dark text-white" id="tick">Checkout</a></p>
            </div>
            </div>
            `
        }
    })
}

displayProducts()

localStorage.setItem('products', JSON.stringify(products));