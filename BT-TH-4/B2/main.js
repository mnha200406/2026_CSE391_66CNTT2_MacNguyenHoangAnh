const form = document.getElementById("registerForm");

const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passInput = document.getElementById("password");
const genderInput = document.getElementById("gender");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passError = document.getElementById("passError");
const genderError = document.getElementById("genderError");


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^0[0-9]{9}$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;


function showError(input,errorElement,message){

errorElement.textContent = message;
input.classList.add("invalid");
input.classList.remove("valid");

}

function showSuccess(input,errorElement){

errorElement.textContent = "";
input.classList.remove("invalid");
input.classList.add("valid");

}


function validateName(){

let value = nameInput.value.trim();

if(value === ""){
showError(nameInput,nameError,"Không được để trống");
return false;
}

if(!nameRegex.test(value)){
showError(nameInput,nameError,"Chỉ được nhập chữ");
return false;
}

showSuccess(nameInput,nameError);
return true;

}


function validateEmail(){

let value = emailInput.value.trim();

if(value === ""){
showError(emailInput,emailError,"Email không được trống");
return false;
}

if(!emailRegex.test(value)){
showError(emailInput,emailError,"Email không hợp lệ");
return false;
}

showSuccess(emailInput,emailError);
return true;

}


function validatePhone(){

let value = phoneInput.value.trim();

if(!phoneRegex.test(value)){
showError(phoneInput,phoneError,"SĐT phải 10 số và bắt đầu bằng 0");
return false;
}

showSuccess(phoneInput,phoneError);
return true;

}


function validatePassword(){

let value = passInput.value;

if(!passRegex.test(value)){
showError(passInput,passError,"Mật khẩu ≥8 ký tự, có hoa, thường, số");
return false;
}

showSuccess(passInput,passError);
return true;

}


function validateGender(){

if(genderInput.value === ""){
genderError.textContent = "Vui lòng chọn giới tính";
return false;
}

genderError.textContent = "";
return true;

}


form.addEventListener("submit",function(e){

e.preventDefault();

let valid =
validateName() &
validateEmail() &
validatePhone() &
validatePassword() &
validateGender();

if(valid){
alert("Đăng ký thành công");
}

});


nameInput.addEventListener("blur",validateName);
emailInput.addEventListener("blur",validateEmail);
phoneInput.addEventListener("blur",validatePhone);
passInput.addEventListener("blur",validatePassword);
genderInput.addEventListener("change",validateGender);


nameInput.addEventListener("input",()=> nameError.textContent="");
emailInput.addEventListener("input",()=> emailError.textContent="");
phoneInput.addEventListener("input",()=> phoneError.textContent="");
passInput.addEventListener("input",()=> passError.textContent="");