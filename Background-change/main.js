const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"];

const btn = document.getElementById('change');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
let colorChange = '#';
for (let i = 0; i < 6; i++){
    colorChange += hex[getRandomNumber()];
}
color.textContent = colorChange;
document.body.style.backgroundColor = colorChange;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}