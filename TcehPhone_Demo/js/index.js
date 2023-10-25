const Product = [
    {
        productImg: "./image/iphone-14-pro.png",
        productName: "iPhone 14 Promax Chính Hãng",
        productPrice: "26.990.000",
        productDiscount: "29.990.000",
        productPromotion: "Giảm 9%"
    },
    {
        productImg: "./image/samsung_galaxys22ultra.jpg",
        productName: "Samsung Galaxy S22 Ultra",
        productPrice: "21.990.000",
        productDiscount: "39.990.000",
        productPromotion: "Giảm 9%"
    },
    {
        productImg: "./image/samsung_z_flip5.jpg",
        productName: "Samsung Z Flip 5",
        productPrice: "22.990.000",
        productDiscount: "45.500.000",
        productPromotion: "Giảm 9%"
    },
    {
        productImg: "./image/samsung_galaxy_z_flip.jpg",
        productName: "Samsung Galaxy Z Flip",
        productPrice: "23.990.000",
        productDiscount: "29.990.000",
        productPromotion: "Giảm 9%"
    },
    {
        productImg: "./image/samsung_galaxy_z_fold_4.jpg",
        productName: "Samsung Galaxy Z Fold 4",
        productPrice: "25.990.000",
        productDiscount: "30.990.000",
        productPromotion: "Giảm 9%"
    },
]


var html = "";
Product.forEach(item => {
    html += /* html */
        `
            <div class="product">
                <div class="product-image">
                    <a href="./productdetail.html">
                        <img src="${item.productImg}" alt="">
                    </a>
                </div>
                <div class="content">
                    <a href="./productdetail.html">
                        <h4>${item.productName}</h4>
                    </a>
                    <div class="price-list">
                        <div class="price-main">
                        <span class="price-cut">${item.productPrice}</span><sup  class="price-cut">đ</sup>
                            <span class="price">${item.productDiscount}</span><sup>đ</sup>
                        </div>
                        <p>${item.productPromotion}</p>
                    </div>
                </div>
                <div class="button-buy">
                    <button class="btn_product">
                        Mua Ngay
                    </button>
                </div>
            </div>
        `;
        document.querySelector('.product-main').innerHTML = html;
});