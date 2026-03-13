// 1. querySelector - chọn phần tử đầu tiên phù hợp với CSS selector
let firstText = document.querySelector(".text");
console.log(firstText);


// 2. querySelectorAll - lấy danh sách tất cả phần tử
let allText = document.querySelectorAll(".text");

allText.forEach(function(item){
    console.log(item);
});


// 3. getElementById - truy cập trực tiếp bằng ID
let title = document.getElementById("title");
console.log(title);


// Ví dụ thêm sự kiện
document.getElementById("btn").addEventListener("click", function(){
    title.style.color = "red";
});

// 1. Thay đổi văn bản tiêu đề bằng textContent
let title = document.getElementById("title");
title.textContent = "Tiêu đề đã được thay đổi bằng JavaScript";


// 2. Chèn thêm HTML vào div bằng innerHTML
let content = document.getElementById("content");

content.innerHTML = `
<h3>Nội dung mới</h3>
<p>Đây là đoạn HTML được chèn bằng innerHTML</p>
`;


// 3. Tạo thẻ <li> mới bằng createElement
let newItem = document.createElement("li");


// thêm nội dung cho thẻ li
newItem.textContent = "Mục mới được tạo";


// 4. Append phần tử vừa tạo vào danh sách ul
let list = document.getElementById("list");
list.append(newItem);


// 5. Xóa một phần tử bằng remove()
let firstItem = document.querySelector("#list li");

if(firstItem){
    firstItem.remove();
}

// lấy phần tử
let img = document.getElementById("myImage");
let btnChange = document.getElementById("btnChange");
let btnToggle = document.getElementById("btnToggle");


// 1. Thay đổi thuộc tính src của thẻ img
btnChange.addEventListener("click", function(){

    // dot notation
    img.src = "img2.jpg";

});


// 2. Thêm class
img.classList.add("border");


// 3. Xóa class
img.classList.remove("border");


// 4. Toggle class (bật/tắt)
btnToggle.addEventListener("click", function(){

    img.classList.toggle("active");

});


// 5. Kiểm tra class tồn tại
if(img.classList.contains("active")){
    console.log("Ảnh đang có class active");
}else{
    console.log("Ảnh chưa có class active");
}

let btn = document.getElementById("btnClick");
let text = document.getElementById("text");


// 1. Gán sự kiện click cho nút
btn.addEventListener("click", function () {
    console.log("Bạn đã click nút");
});


// 2. Gán nhiều listener cho cùng 1 phần tử
btn.addEventListener("click", function () {
    alert("Sự kiện click thứ 2");
});


// 3. mouseenter
btn.addEventListener("mouseenter", function () {
    console.log("Chuột đi vào nút");
});


// 4. mouseleave
btn.addEventListener("mouseleave", function () {
    console.log("Chuột rời khỏi nút");
});


// 5. Thay đổi text khi click
btn.addEventListener("click", function () {
    text.textContent = "Nội dung đã được thay đổi!";
});


// 6. Toggle class để đổi màu nền
btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});