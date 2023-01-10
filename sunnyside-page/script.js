const menu = document.querySelector('.menu');
const navigation = document.querySelector('ul.navigation');


menu.addEventListener('click', ()=> {
    if (navigation.style.display === 'block'){
        navigation.style.display = 'none';
    }else {
        navigation.classList.toggle('active');
    }
    
});