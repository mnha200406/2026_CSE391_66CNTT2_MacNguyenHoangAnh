const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});

const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
    document.body.style.backgroundColor = "red";
});
// const btnGreen = document.getElementById('btnGreen')
const lewlew = document.getElementById('lewlew')
btnRed.addEventListener("dblclick",function (){
    document.lewlew.style.backgroundImage = "url('z7579045513366_af55d99946a5db9cfb64125abaea493d.jpg')";

})


const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});

document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});