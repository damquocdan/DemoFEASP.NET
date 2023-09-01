// Lấy tham chiếu đến các phần tử cần thiết
const imageElement = document.getElementById("image");
const changeNextButton = document.getElementById("changeNextButton");
const changeLastButton = document.getElementById("changeLastButton");

// Danh sách các hình ảnh mà bạn muốn chuyển đổi
const imageList = ["images.jpg", "f70f05c965f280acd9e3.jpg", "thiet-ke-nha-tro-dep-2020-bandon-12.jpg"];
let currentImageIndex = 0;
let currentImageInde =2;

// Định nghĩa hàm để thay đổi hình ảnh
function changeNextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageList.length;
  const newImageSrc = imageList[currentImageIndex];
  imageElement.src = newImageSrc;
}

// Gán sự kiện nhấp chuột để gọi hàm thay đổi hình ảnh
changeNextButton.addEventListener("click", changeNextImage);

function changeLastImage() {
    currentImageInde = (currentImageInde - 1) % imageList.length;
    const newImageSrc = imageList[currentImageInde];
    imageElement.src = newImageSrc;
  }
  changeLastButton.addEventListener("click", changeLastImage);
  