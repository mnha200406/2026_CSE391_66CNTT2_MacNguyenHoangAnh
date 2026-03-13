let students = [];
let filteredStudents = [];
let sortDirection = null;

const nameInput = document.getElementById("nameInput");
const markInput = document.getElementById("markInput");
const addBtn = document.getElementById("addBtn");

function classify(mark){

if(mark >= 8.5) return "Giỏi";
if(mark >= 7) return "Khá";
if(mark >= 5) return "Trung bình";
return "Yếu";

}

function applyFilters(){

const keyword = document
.getElementById("searchInput")
.value
.toLowerCase();

const filter = document
.getElementById("filterSelect")
.value;

filteredStudents = students.filter(student =>{

const matchName = student.name
.toLowerCase()
.includes(keyword);

const type = classify(student.mark);

const matchFilter =
filter === "all" || type === filter;

return matchName && matchFilter;

});

if(sortDirection){

filteredStudents.sort((a,b)=>{

if(sortDirection === "asc"){
return a.mark - b.mark;
}else{
return b.mark - a.mark;
}

});

}

renderTable();

}

function renderTable(){

const tbody = document.querySelector("tbody");

tbody.innerHTML = "";

if(filteredStudents.length === 0){

tbody.innerHTML =
`<tr><td colspan="5">Không có kết quả</td></tr>`;

return;

}

filteredStudents.forEach((student,index)=>{

const tr = document.createElement("tr");

if(student.mark < 5){
tr.style.backgroundColor = "yellow";
}

tr.innerHTML = `
<td>${index+1}</td>
<td>${student.name}</td>
<td>${student.mark}</td>
<td>${classify(student.mark)}</td>
<td>
<button class="deleteBtn"
data-index="${students.indexOf(student)}">
Xóa
</button>
</td>
`;

tbody.appendChild(tr);

});

updateStats();

}

function updateStats(){

let total = students.length;
let avg = 0;

if(total > 0){

let sum = students.reduce(
(a,b)=> a + b.mark,0
);

avg = (sum/total).toFixed(2);

}

document.getElementById("stats").innerText =
"Tổng sinh viên: " + total +
" | Điểm trung bình: " + avg;

}

function addStudent(){

let name = nameInput.value.trim();
let mark = parseFloat(markInput.value);

if(name === ""){
alert("Họ tên không được trống");
return;
}

if(isNaN(mark) || mark < 0 || mark > 10){
alert("Điểm phải từ 0 đến 10");
return;
}

students.push({
name:name,
mark:mark
});

nameInput.value="";
markInput.value="";
nameInput.focus();

applyFilters();

}

addBtn.addEventListener("click",addStudent);

markInput.addEventListener("keydown",function(e){

if(e.key === "Enter"){
addStudent();
}

});

document
.getElementById("searchInput")
.addEventListener("input",applyFilters);

document
.getElementById("filterSelect")
.addEventListener("change",applyFilters);

document
.getElementById("markHeader")
.addEventListener("click",function(){

if(sortDirection === "asc"){
sortDirection = "desc";
}else{
sortDirection = "asc";
}

this.textContent =
"Điểm " + (sortDirection === "asc" ? "▲" : "▼");

applyFilters();

});

document
.querySelector("tbody")
.addEventListener("click",function(e){

if(e.target.classList.contains("deleteBtn")){

let index = e.target.dataset.index;

students.splice(index,1);

applyFilters();

}

});

applyFilters();