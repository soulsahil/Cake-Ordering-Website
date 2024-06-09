let carts = document.querySelectorAll(".addToCart");

window.products = [{
        name: 'Pineapple Cake',
        price: 500,
        tag: "pineapple.webp",
        inCart: 0
    },
    {
        name: 'Chocolate Cake',
        price: 550,
        tag: "chocolatecake.webp",
        inCart: 0
    },
    {
        name: 'Butterscotch Cake',
        price: 600,
        tag: "butterscotchcake.jpg",
        inCart: 0
    },
    {
        name: 'Blueberry Cake',
        price: 700,
        tag: "blueberry cake.jpg",
        inCart: 0
    },
    {
        name: 'Dark Forest Cake',
        price: 650,
        tag: "dark forest.webp",
        inCart: 0
    },
    {
        name: 'Snowy Choclate Cake',
        price: 800,
        tag: "christmas1.jpg",
        inCart: 0
    }, {
        name: 'Christmas Sponge Cake',
        price: 450,
        tag: "christmas2.jpg",
        inCart: 0
    }, {
        name: 'Cookie Cake',
        price: 850,
        tag: "christmas3.jpg",
        inCart: 0
    }, {
        name: 'Snow Santa Cake',
        price: 600,
        tag: "christmas4.jpg",
        inCart: 0
    }, {
        name: 'Pine leaf Cake',
        price: 600,
        tag: "christmas5.jpg",
        inCart: 0
    },
    {
        name: 'Dress Berry Cake',
        price: 700,
        tag: "christmas6.jpg",
        inCart: 0
    }, {
        name: 'Dark Chocolate Cake',
        price: 500,
        tag: "bday1.webp",
        inCart: 0
    }, {
        name: 'Pink Rose Cake',
        price: 900,
        tag: "bday2.webp",
        inCart: 0
    }, {
        name: 'Golden Rose Cake',
        price: 800,
        tag: "bday3.jpg",
        inCart: 0
    }, {
        name: 'Chocolate Flower Cake',
        price: 500,
        tag: "bday4.webp",
        inCart: 0
    }, {
        name: 'Chocolate Vanilla Cake',
        price: 550,
        tag: "bday5.webp",
        inCart: 0
    }, {
        name: 'Pink Lotte Cake',
        price: 700,
        tag: "bday6.jpg",
        inCart: 0
    }, {
        name: 'Paw Patrol Cake',
        price: 450,
        tag: "kids1.webp",
        inCart: 0
    }, {
        name: 'Cow Gang Cake',
        price: 500,
        tag: "kids2.webp",
        inCart: 0
    }, {
        name: 'Panda Cake',
        price: 600,
        tag: "kids3.jpg",
        inCart: 0
    }, {
        name: 'McQueen Cake',
        price: 650,
        tag: "kids4.webp",
        inCart: 0
    }, {
        name: 'Bulldozer Cake',
        price: 700,
        tag: "kids5.jpg",
        inCart: 0
    }, {
        name: 'Cats Cake',
        price: 900,
        tag: "kids6.jpg",
        inCart: 0
    }, {
        name: 'White Anniversary Cake',
        price: 500,
        tag: "ann1.webp",
        inCart: 0
    }, {
        name: 'Red Velvet Cake',
        price: 650,
        tag: "ann2.webp",
        inCart: 0
    }, {
        name: 'Violet Cream Cake',
        price: 700,
        tag: "ann3.webp",
        inCart: 0
    }, {
        name: 'White Sweet Cake',
        price: 500,
        tag: "ann4.webp",
        inCart: 0
    }, {
        name: 'Heart Chocolate Cake',
        price: 550,
        tag: "ann5.webp",
        inCart: 0
    }, {
        name: 'Love Balloon Cake',
        price: 450,
        tag: "ann6.jpg",
        inCart: 0
    }, {
        name: 'Vanilla Forest Cake',
        price: 200,
        tag: "eggl1.jpg",
        inCart: 0
    }, {
        name: 'Choco Lump Cake',
        price: 300,
        tag: "eggl2.jpeg",
        inCart: 0
    }, {
        name: 'Choco Nugget Cake',
        price: 250,
        tag: "eggl3.jpg",
        inCart: 0
    }, {
        name: 'Choco Vanilla Cake',
        price: 400,
        tag: "eggl4.jpg",
        inCart: 0
    }, {
        name: 'CrossChoco Cake',
        price: 600,
        tag: "eggl5.jpg",
        inCart: 0
    }, {
        name: 'Caramel Cake',
        price: 500,
        tag: "eggl6.webp",
        inCart: 0
    }, {
        name: 'Choco Ball Pinata Cake',
        price: 650,
        tag: "pin1.webp",
        inCart: 0
    }, {
        name: 'Choco Heart Pinata Cake',
        price: 650,
        tag: "pin2.jpeg",
        inCart: 0
    }, {
        name: 'Ferrero Pinata Cake',
        price: 800,
        tag: "pin3.webp",
        inCart: 0
    }, {
        name: 'ChocoUni Pinata Cake',
        price: 850,
        tag: "pin4.webp",
        inCart: 0
    }, {
        name: 'Car Pinata Cake',
        price: 800,
        tag: "pin5.jpg",
        inCart: 0
    }, {
        name: 'Gems Pinata Cake',
        price: 700,
        tag: "pin6.webp",
        inCart: 0
    }, {
        name: 'Dark Brown Cake',
        price: 550,
        tag: "photo1.webp",
        inCart: 0
    }, {
        name: 'White Cherry Cake',
        price: 450,
        tag: "photo2.webp",
        inCart: 0
    }, {
        name: 'Pink Blossom Cake',
        price: 400,
        tag: "photo3.jpg",
        inCart: 0
    }, {
        name: 'KitKat Cake',
        price: 800,
        tag: "photo4.webp",
        inCart: 0
    }, {
        name: 'ChocoBlock Cake',
        price: 600,
        tag: "photo5.jpg",
        inCart: 0
    }, {
        name: 'WhiteWall Cake',
        price: 500,
        tag: "photo6.jpg",
        inCart: 0
    }, {
        name: 'ColorEgg Cake',
        price: 600,
        tag: "egg1.jpeg",
        inCart: 0
    }, {
        name: 'EggBasket Cake',
        price: 900,
        tag: "egg2.jpg",
        inCart: 0
    }, {
        name: 'Omelette Vanilla Cake',
        price: 300,
        tag: "egg3.webp",
        inCart: 0
    }, {
        name: 'Eggloo Cake',
        price: 600,
        tag: "egg4.jpg",
        inCart: 0
    }, {
        name: 'BlueNest Cake',
        price: 450,
        tag: "egg5.webp",
        inCart: 0
    }, {
        name: 'Dessert Cake',
        price: 500,
        tag: "egg6.jpg",
        inCart: 0
    }, {
        name: 'Dripco Cake',
        price: 400,
        tag: "lux1.png",
        inCart: 0
    }, {
        name: 'ChocoRib Cake',
        price: 450,
        tag: "lux2.webp",
        inCart: 0
    }, {
        name: 'Chocopearl Cake',
        price: 500,
        tag: "lux3.jpg",
        inCart: 0
    }, {
        name: 'Panco Cake',
        price: 500,
        tag: "lux4.webp",
        inCart: 0
    }, {
        name: 'Heart Forest Cake',
        price: 600,
        tag: "lux5.webp",
        inCart: 0
    }, {
        name: 'Miniwrap Cake',
        price: 300,
        tag: "lux6.webp",
        inCart: 0
    }, {
        name: 'Burger Cake',
        price: 700,
        tag: "cus1.jpg",
        inCart: 0
    }, {
        name: 'Wall-e Cake',
        price: 2000,
        tag: "cus2.jpg",
        inCart: 0
    }, {
        name: 'Unicorn Cake',
        price: 700,
        tag: "cus3.jpg",
        inCart: 0
    }, {
        name: 'Cindrella Cake',
        price: 1000,
        tag: "cus4.webp",
        inCart: 0
    }, {
        name: 'Happy Ending Cake',
        price: 1500,
        tag: "cus5.jpg",
        inCart: 0
    }, {
        name: 'Falling Cake',
        price: 1800,
        tag: "cus6.jpg",
        inCart: 0
    }, {
        name: 'Jam Cake',
        price: 200,
        tag: "cheese1.jpg",
        inCart: 0
    }, {
        name: 'White Strawberry Cake',
        price: 600,
        tag: "cheese2.jpg",
        inCart: 0
    }, {
        name: 'Silver Cake',
        price: 300,
        tag: "cheese3.jpg",
        inCart: 0
    }, {
        name: 'Pie Cake',
        price: 400,
        tag: "cheese4.jpg",
        inCart: 0
    }, {
        name: 'Honey Cake',
        price: 400,
        tag: "cheese5.jpg",
        inCart: 0
    }, {
        name: 'Orange flower Cake',
        price: 300,
        tag: "cheese6.jpg",
        inCart: 0
    }, {
        name: 'Kitkat Cupcake',
        price: 70,
        tag: "cup1.jpg",
        inCart: 0
    }, {
        name: 'Strawberry Cupcake',
        price: 60,
        tag: "cup2.jpg",
        inCart: 0
    }, {
        name: 'ChocoVan Cupcake',
        price: 50,
        tag: "cup3.jpg",
        inCart: 0
    }, {
        name: 'Rainbow Cupcake',
        price: 50,
        tag: "cup4.jpg",
        inCart: 0
    }, {
        name: 'Christmas Cupcake',
        price: 80,
        tag: "cup5.jpg",
        inCart: 0
    }, {
        name: 'CreamTop Cupcake',
        price: 40,
        tag: "cup6.jpg",
        inCart: 0
    }, {
        name: 'White Tower Cake',
        price: 1100,
        tag: "tier1.jpg",
        inCart: 0
    }, {
        name: 'Fruit Tower Cake',
        price: 1500,
        tag: "tier2.jpg",
        inCart: 0
    }, {
        name: 'Blue Tower Cake',
        price: 1200,
        tag: "tier3.jpg",
        inCart: 0
    },
    {
        name: 'Flowery Cake',
        price: 1600,
        tag: "tier4.jpg",
        inCart: 0
    }, {
        name: 'Globe Cake',
        price: 900,
        tag: "tier5.jpg",
        inCart: 0
    }, {
        name: 'Vine Cake',
        price: 1000,
        tag: "tier6.jpg",
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCountElement = document.querySelector('.pow');

    if (productNumbers && cartCountElement) {
        cartCountElement.textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log("running");
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.pow').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.pow').textContent = 1;
    }
    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsincart')
    cartItems = JSON.parse(cartItems);
    console.log("cartItems are", cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    product.inCart = 1;
    localStorage.setItem("productsincart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log("cartCost is", cartCost);


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
            product.price);

    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsincart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartItems);
    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
              <ion-icon name="close-circle-outline" onclick="remove('${item.tag}')"></ion-icon>
              <img src="./images/${item.tag}">
                 <span>${item.name}</span>
                 </div>
                 <div class = "price">₹${item.price}</div>

                 <div class="quantity">
                 <ion-icon class="decrease" name="remove-outline" onclick="decrease('${item.tag}')"></ion-icon>
                
                 <span>${item.inCart}</span>
                  <ion-icon class="increase" name="add-outline" onclick="increase('${item.tag}')"></ion-icon>
                 </div>
                 
                 <div class="total">
                 ₹${item.inCart*item.price}.00
                 </div>
                  `;
    });

   
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                  <h4 class="basketTotalTitle">
                        Total Order Value: </h4>
                  <h4 class="basketTotal">
                    ₹${cartCost}.00
                  </h4>
                  </div>
          `;
        deleteButtons();
        manageQuantity();
    }
}

function increase(tag)
{
    let cartItems = JSON.parse(localStorage.getItem('productsincart'));

if (cartItems && cartItems[tag]) {
    cartItems[tag].inCart += 1;
    localStorage.setItem('productsincart', JSON.stringify(cartItems));
    updateCartValues();
    displayCart();
}
}

function decrease(tag)
{
    let cartItems = JSON.parse(localStorage.getItem('productsincart'));

if (cartItems && cartItems[tag] && cartItems[tag].inCart>=1) {
    cartItems[tag].inCart -= 1;
    localStorage.setItem('productsincart', JSON.stringify(cartItems));
    updateCartValues();
    displayCart();
}
}

function remove(tag)
{
    let cartItems = JSON.parse(localStorage.getItem('productsincart'));

    if (cartItems && cartItems[tag]) {
        // Remove the item from cartItems
        delete cartItems[tag];
        // Update local storage with the modified cartItems
        localStorage.setItem('productsincart', JSON.stringify(cartItems));
        // Update the displayed cart
        displayCart();
        // Update cart values such as total cost and quantity
        updateCartValues();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = JSON.parse(localStorage.getItem('productsincart'));

    if (cartItems === null) {
        return;
    }

    for (let i = 0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            let currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                localStorage.setItem('productsincart', JSON.stringify(cartItems));
                updateCartValues();
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            let currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            cartItems[currentProduct].inCart += 1;
            localStorage.setItem('productsincart', JSON.stringify(cartItems));
            updateCartValues();
            displayCart();
        });
    }
}

// function updateCartValues() {
//     let cartItems = JSON.parse(localStorage.getItem('productsincart'));
//     let totalCost = 0;
//     let totalQuantity = 0;

//     if (cartItems === null) {
//         return;
//     }

//     Object.values(cartItems).forEach(item => {
//         if (item && item.inCart !== undefined) {
//             totalCost += item.price * item.inCart;
//             totalQuantity += item.inCart;
//         }
//     });

//     localStorage.setItem('totalCost', totalCost);
//     localStorage.setItem('totalQuantity', totalQuantity);

//     document.querySelector('.pow').textContent = totalQuantity;
//     document.querySelector('.basketTotal').textContent = `₹ ${totalCost}.00`;
// }

function updateCartValues() {
    let cartItems = JSON.parse(localStorage.getItem('productsincart'));
    let totalCost = 0;
    let totalQuantity = 0;

    if (cartItems !== null) {
        Object.values(cartItems).forEach(item => {
            if (item && item.inCart !== undefined) {
                totalCost += item.price * item.inCart;
                totalQuantity += item.inCart;
            }
        });

        localStorage.setItem('totalCost', totalCost);
        localStorage.setItem('cartNumbers', totalQuantity);

        document.querySelector('.pow').textContent = totalQuantity;
        let basketTotal = document.querySelector('.basketTotal');
        if (basketTotal) {
            basketTotal.textContent = `₹${totalCost}.00`;
        }
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsincart'); //here
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g, '').trim();

            if (cartItems && cartItems[productName]) {
                localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
                localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

                delete cartItems[productName];
                localStorage.setItem('productsincart', JSON.stringify(cartItems)); //here

                displayCart();
                onLoadCartNumbers();
            }
        })
    }
}

onLoadCartNumbers();
displayCart();


function addToCart(productId) {
    // Store the product id in a variable or local storage
    localStorage.setItem("productId", productId);
    // Redirect to the cart page
    window.location.href = "cart.html";
}

function placeOrder(productId) {
    // Store the product id in local storage with another key
    localStorage.setItem("orderProductId", productId);
    // Redirect to the order page
    window.location.href = "order.html";
}
