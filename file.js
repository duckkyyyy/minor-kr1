let button = document.getElementById('button');
let secondName = document.getElementById('block4');
let firstName = document.getElementById('block5');
let thirdName = document.getElementById('block6');

button.addEventListener('click', function(){
    secondName.textContent = 'Ivanov';
    firstName.textContent = 'Ivan';
    thirdName.textContent = 'Ivanovich';
})