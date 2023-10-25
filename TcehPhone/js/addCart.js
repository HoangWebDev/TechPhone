let carts = document.querySelectorAll('.btn_product');

let products = [];
carts.forEach((button, index) => {
    button.addEventListener("click", (event) => {
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h4").innerText;
        var productPrice = product.querySelector("span").innerText;
        var price = Number (productPrice);
        var tagName = productImg.slice(28, );
        var productObj = {
            img: productImg,
            name: productName,
            price: price,
            tag: tagName,
            inCart: 0
        }
        products.push(productObj);
    })
});

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart .num-cart').textContent = productNumbers;
        
    }
}

function cartNumbers(product) {
    // console.log("The Product is", product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart .num-cart').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart .num-cart').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        // console.log(typeof cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}
onLoadCartNumbers();