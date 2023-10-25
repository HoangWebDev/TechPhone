
    function displayCart() {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        let cartCost = localStorage.getItem('totalCost');
        let cartNumbers = localStorage.getItem('cartNumbers');
        let productContainer = document.querySelector('#showcart');
        if(cartItems && productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += 
                /*html*/
                `<tr>
                    <td>
                        <a href="" class="product-image">
                            <img src="${item.img}" alt="">
                        </a>
                    </td>
                    <td colspan="3"> 
                        <a href="">
                            <h4>${item.name}</h4>
                        </a>
                    </td>
                    <td>
                        <span>${item.price}</span>
                    </td>
                    <td>
                        <div class="qty">
                            ${item.inCart}
                        </div>
                    </td>
                    <td class="delete"><button onclick="removecart(this)"><ion-icon name="close-outline"></ion-icon></button></td>
                </tr>`;
            });
        }
        var totalCost = document.querySelector('#pay .pay-box .money');
        totalCost.innerHTML = `
                                <h3>Tổng tiền:</h3>
                                        <span id="price">
                                            ${cartCost}<sup>đ</sup>
                                        </span>
                            `;
        document.querySelector('.cart .num-cart').textContent = cartNumbers;
    }
    function removecart(button) {
        var row = button.parentElement.parentElement;
        document.getElementById("showcart").removeChild(row);
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        cartItems.splice(this, 1);
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        let cartCost = localStorage.getItem('totalCost');
        let cartNumbers = localStorage.getItem('cartNumbers');
        cartNumbers--;
        localStorage.setItem('cartNumbers', cartNumbers);
        document.querySelector(".cart .num-cart").textContent = cartNumbers;   
        /* let cartCost = localStorage.getItem('totalCost');
        let cartNumbers = localStorage.getItem('cartNumbers');
        cartNumbers--;
        localStorage.setItem('cartNumbers', cartNumbers);
        document.querySelector(".cart .num-cart").textContent = cartNumbers; */
        displayCart();
    };
    displayCart();