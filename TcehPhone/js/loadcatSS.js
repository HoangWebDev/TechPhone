var arrCate = [
    {
    img: '9499/245841/type-c-pd-25w-belkin-wca004-ava-600x600.jpg',
    name: 'Sạc Nhanh 25W',
    price: '690.000'
    },
    {
    img: '54/202699/tai-nghe-bluetooth-roman-q5c-den-thumb-600x600.jpeg',
    name: 'Tai nghe Bluetooth AirPods',
    price: '6.940.000'
    },
    {
    img: '58/248328/cap-type-c-20cm-xmobile-tc200b-avatar1-600x600.jpg',
    name: 'Cáp type-C 20cm Xmobile',
    price: '400.000'
    },
    {
    img: '60/237830/op-lung-galaxy-a32-nhua-cung-vien-deo-arden-ck-a00-1-600x600.jpg',
    name: 'Ốp lưng',
    price: '100.000'
    },
];
var proCart = "";
for (let i = 0; i < arrCate.length; i++) {
    proCart +=/*html*/
                `<div class="item">
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
