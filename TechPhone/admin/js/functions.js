// const menu = () => {
//   document.querySelector("#side_bar").innerHTML = `<a href="" class="logo">
//           <img src="../image/logo.png" alt="" />
//           Tech<span>Phone</span>
//         </a>
//         <div class="side_menu">
//           <ul class="side_menu--top">
//             <li class="active">
//               <a href="./index.html">
//                 <ion-icon name="grid-outline"></ion-icon>
//                 <span>Quản Lý</span>
//               </a>
//             </li>
//             <li>
//               <a href="./ds_danhmuc.html">
//                 <ion-icon name="file-tray-full-outline"></ion-icon>
//                 <span>Danh mục</span>
//               </a>
//             </li>
//             <li>
//               <a href="./ds_loai.html">
//                 <ion-icon name="layers-outline"></ion-icon>
//                 <span>Loại</span>
//               </a>
//             </li>
//             <li>
//               <a href="./ds_sanpham.html">
//                 <ion-icon name="laptop-outline"></ion-icon>
//                 <span>Sản phẩm</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <ion-icon name="person-outline"></ion-icon>
//                 <span>Tài khoản</span>
//               </a>
//             </li>
//           </ul>
//           <ul class="side_menu--bottom">
//             <li>
//               <a href="">
//                 <ion-icon name="settings-outline"></ion-icon>
//                 <span>Cài đặt</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <ion-icon name="log-out-outline"></ion-icon>
//                 <span>Thoát</span>
//               </a>
//             </li>
//           </ul>
//         </div>`;
// };

//Class danh mục
class danh_muc {
  constructor(id, ten_danh_muc) {
    this.id = id;
    this.ten_danh_muc = ten_danh_muc;
  }
}

//Class sản phẩm
class san_pham {
  constructor(id, id_danh_muc, id_loai, tên, giá, giảm, hình, ngày, hot = 0) {
    this.id = id;
    this.id_danh_muc = id_danh_muc;
    this.id_loai = id_loai;
    this.ten_sp = tên;
    this.gia = giá;
    this.giam_gia = giảm;
    this.hinh = hình;
    this.ngay = ngày;
    this.hot = hot;
  }
}

//Class thuộc tính
class thuoc_tinh {
  constructor(id, id_sp, ram, dia, sim, blue_tooth, pin) {
    this.id = id;
    this.id_sp = id_sp;
    this.ram = ram;
    this.dia = dia;
    this.sim = sim;
    this.blue_tooth = blue_tooth;
    this.pin = pin;
  }
}

//Table danh mục
const ds_danh_muc = () => {
  fetch("http://localhost:3000/danh_muc")
    .then((res) => res.json())
    .then((dm_arr) => {
      let str = ``;
      let stt = 1;
      dm_arr.forEach((dm) => {
        let { id, ten_danh_muc } = dm;
        let obj = new danh_muc(id, ten_danh_muc);
        str += `<tr>
            <td>${stt}</td>
            <td>${ten_danh_muc}</td>
            <td>
              <a href="./danhmuc_sua.html?id=${id}" class="btn btn-update">Sửa</a>
              <button onclick="return xoa(${id})" class="btn btn-delete">Xóa</button>
            </td>
          </tr>`;
        stt++;
      });
      document.querySelector("#ds_danh_muc").innerHTML = `
      <a href="./sanpham_them.html" class="add_product">Thêm</a>
  <table id="example" class="table">
    <thead>
      <tr>
        <th>Stt</th>
        <th>Tên sản phẩm</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody id="tbody">
      ${str}
    </tbody>
    <tr class="listPage"></tr>
    </table>`;
    });
};

//Table danh sách sản phẩm
const dssan_pham = () => {
  fetch("http://localhost:3000/san_pham")
    .then((res) => res.json())
    .then((sp_arr) => {
      let str = ``,
        stt = 1;
      sp_arr.forEach((sp) => {
        let {
          id,
          id_danh_muc,
          id_loai,
          ten_sp,
          gia,
          giam_gia,
          hinh,
          ngay,
          hot,
        } = sp;
        let obj = new san_pham(
          id,
          id_danh_muc,
          id_loai,
          ten_sp,
          gia,
          giam_gia,
          hinh,
          ngay,
          hot
        );
        str += tbody_table(obj, stt);
        stt++;
      });
      document.querySelector("#ds_sanpham").innerHTML = `
      <a href="./sanpham_them.html" class="add_product">Thêm</a>
  <table id="example" class="table">
    <thead>
      <tr>
        <th>Stt</th>
        <th>Hình ảnh</th>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Giảm Giá</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody id="tbody">
      ${str}
    </tbody>
    <tr class="listPage"></tr>
    </table>
    `;
    });
};

//Hiện tbody
const tbody_table = (sp, stt) =>
  ` <tr>
      <td>${stt}</td>
      <td><img src=".${sp.hinh}" alt="" /></td>
      <td>
        <h4>${sp.ten_sp}</h4>
      </td>
      <td>
        <span class="price">${Number(sp.gia).toLocaleString("Vi")} VNĐ</span>
      </td>
      <td>${sp.giam_gia}</td>
      <td>
      <a href="./sanpham_sua.html?id=${sp.id}" class="btn btn-update">Sửa</a>
      <button onclick="return xoa(${sp.id})" class="btn btn-delete">Xóa</button>
      </td>
      </tr>
      `;
