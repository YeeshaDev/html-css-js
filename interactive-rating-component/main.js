let card = document.querySelector('.card');
let result = document.querySelector('.result');
let ratings = document.querySelector('.score');
let btns = document.querySelectorAll('.rating-btn');

// To hide and show the cards respectively when the submit button is clicked on

document.querySelector('#submit-btn').addEventListener('click',function(){
    card.classList.add('hide');
    result.classList.remove('hide');
});

// To add and change the rating number in the result card

for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',function(){
        num = this.innerHTML;
        ratings.innerHTML= "You selected "+ num +" out of 5";
    })
}