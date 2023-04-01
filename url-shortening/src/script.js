const form = document.querySelector('#form');
const input = document.querySelector('input');
const result = document.querySelector('.result');
const hamburger = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('#main_nav');
const error = document.querySelector('#error')

hamburger.addEventListener('click', ()=> {
 if(toggleMenu.style.display === 'none'){
    toggleMenu.style.display='block'
 }else {
    toggleMenu.style.display='none'
 }
})

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const url =input.value;
    if(url === ''){
    console.log('cant submit')
     input.classList.add('error')
     error.textContent='Please add a link'
        
    }else{
        input.classList.remove('error')
    }
console.log(url)
    shortenUrl(url)
   
})
const shortenUrl = async (url) => {
try{
const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`);
const data =await response.json();
 let shorten = data.result.short_link
 console.log(shorten)
const newUrl = document.createElement('div');
newUrl.classList.add('url__item');
newUrl.innerHTML =`
<p class='old__url'>${url}</p>
<div class='shorten__flex'>
<p class='shorten__url'>${shorten}</p>
<button class='copy__btn'> Copy<button>
</div>
`

result.prepend(newUrl);
console.log(newUrl)
const copyBtn = document.querySelector('.copy__btn');
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent)
    copyBtn.classList.add('active');
    copyBtn.innerHTML ='Copied!';
})
input.value=''
}
catch(error){
console.log(error)
}
}