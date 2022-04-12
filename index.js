let namsteBtn = document.querySelector('button');
namsteBtn.addEventListener('click', inputMsg);

function inputMsg(){
let name = prompt('Enter name of student');
namsteBtn.textContent = 'name:' + name;
}