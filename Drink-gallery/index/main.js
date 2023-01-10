let menu = document.querySelector('.ham-menu');
let navigation = document.querySelector('.nav ul')

menu.onclick = function(){
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
    navigation.style.width = '100%';
    navigation.style.height = '100%';


}

const [thumbnail, images, opacity] = [
    document.querySelector("#mainImg"), 
    document.querySelectorAll(".thumbnail img"),
    0.7
    ];

//set first image the opacity 
images[0].style.opacity = opacity;
images[1].style.width = "50px";


/* This is one option to make it: totally functional
images.forEach(img => img.addEventListener("click", e => thumbnail.src = e.target.src)); */

//Other way to do it:
images.forEach(img => img.addEventListener("click", imgClick));

function bgColorChange (color) {
    document.body.style.backgroundColor = color;
    document.body.style.transition = "all 0.7s ease-in-out";
    window.setTimeout("bgColorChange()",1000);
}
function imgClick(e) {
    //Reset opacity 
    images.forEach(img => (img.style.opacity = 1));
    //Change current image
    thumbnail.src = e.target.src;
    
    //add fade-in class on current image
    thumbnail.classList.add("fade-in");
    //Remove fade-in class
    setTimeout(() => thumbnail.classList.remove("fade-in"), 500);
    //Change the opacity on clicked image
    e.target.style.opacity = opacity;

    
}