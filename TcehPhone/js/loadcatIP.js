var arrCate = [
    {
    img: '9499/230315/s16/114.34.03-650x650.png',
    name: 'Sạc Apple 20W',
    price: '690.000'
    },
    {
    img: '54/289781/tai-nghe-bluetooth-airpods-pro-2-magsafe-charge-apple-mqd83-trang-090922-034128-600x600.jpeg',
    name: 'Tai nghe Bluetooth AirPods',
    price: '6.940.000'
    },
    {
    img: '1363/291824/mieng-dan-kinh-iphone-14-pro-jcpal-thumb-1-600x600.jpg',
    name: 'Miến dán kính cường lực',
    price: '400.000'
    },
    {
    img: '60/290321/op-lung-magsafe-iphone-14-pro-nhua-trong-apple-mpu63-thumb-600x600.jpg',
    name: 'Ốp lưng',
    price: '200.000'
    },
];
var proCart = "";
for (let i = 0; i < arrCate.length; i++) {
    proCart +=`<div class="item">
                    <a href="">
                        <div class="img-ac">
                            <img alt=""
                                src="https://cdn.tgdd.vn/Products/Images/${arrCate[i].img}">
                        </div>
                        <div class="note">
                            <h4>${arrCate[i].name}</h4>
                            <span>
                                <b>${arrCate[i].price}₫</b>
                            </span>
                        </div>
                        <div class="star">
                            <img src="../Image/star.png" alt="">
                            <img src="../Image/star.png" alt="">
                            <img src="../Image/star.png" alt="">
                            <img src="../Image/star.png" alt="">
                            <img src="../Image/star.png" alt="">
                        </div>
                    </a>
                </div>`
};
document.querySelector(".box-images").innerHTML = proCart;
