//JavaScript playground.
//storing of values with assignment operators
var myVariable = 5;
console.log(myVariable);

/* Assigning the value of one variable to another. the name "Aisha" is called a 
string literal i.e series of name(characters) or numbers inside a single or 
double quote.*/
var myName;
var myName = "Aisha";
var myFirstName;
myFirstName = myName;
console.log(myFirstName);

/*Using var, let and const. they are all variables used to store values
but var can be redeclared while const and let can not.
*/

// using variable with numbers and string literals

let fullName = "Aisha" + " " +"Agunbiade";
console.log(fullName);
/* adding a string to the first value automatically
makes the other numbers treated as a string*/
let k = "5" + 3 + 2;// This is called concatenation.
console.log(k); // 532

let g = 4 + 5 + "6";//only the last no will be taken as a string.
console.log(g); //96
//JavaScript Arithmetic operators (Addition,subtraction,multiplication,division)
//Addition
let x = 5;
let y = 10;
x--;//decrement of a number.
console.log(x + y);

let u = 5;
u += 7; // using argumented addition
console.log(u)
//subtration
const a = 6;
const b = 12;
const c = a - b;
console.log(b - a);

//multiplication
var num = 5;
var myNum = 7;
num *= 4 // aurgumented multiplication.
myNum++;//increment of a number in this case myNum now = 8
console.log (num * myNum);

//division
let d = 10;
let e = 15;
console.log(d / e);

//Escaping literals

const fun = "I love learning JavaScript. It\'s so much fun.";
document.write("<br>" + fun);
const quote = " Nelson Mendela once said,\"The greatest glory in living lies not never falling but rising every time we fall\".";
document.write("<br>" + quote);

//Multi-dimensional arrays with indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13 ,14 ,15]
]
//to find the indexes of arr[2],[2,1],[3,0],[3,0,5]
arr [2] = [7, 8, 9];
arr [2, 1] = 8;
arr [3,0] = [10,11,12];// the first array indexes in the third array.
arr [3,0,5] = 15; //the 5th array index in the third array,this has 3 numbers i.e[3,0,5] because there are 2 arrays in one.

//Find the nth character and nth-to-laast-character in a string.
const lastName = "Agunbiade"
const firstLetter = lastName[0];
console.log(firstLetter);
//nth-to-last-character.
const firstName = "Aisha";
const fourthLastLetter = firstName[firstName.length - 2];
console.log(fourthLastLetter);

//writing wordblanks in JavaScript

let sentence = " I am really " + "JavaScript." + " " +"It is "
+"," +"and very "
sentence = " I am really" + " enjoying" + " JavaScript." + " " + "It is" +" so much fun" +"."
document.write("<br>" + sentence);

//the tyeof operator
document.getElementById("demo").innerHTML = typeof "Aisha" + "<br>" + typeof 34 + "<br>" + typeof ""
+ "<br>" + typeof (3.412)// using the typeof operator to know the type of value of a javscript variable.
let carname;// this will be undefined since no value as be assigned to the variable.
console.log(carname);

// JavaScript functions.(They are block of codes designed to perform a particular task).
function myFunction( j, m){
    return j * m;
}
console.log(5 * 10);

let message = myFunctionName();
function myFunctionName(){
    console.log("Hello World!")
}

function myFunctionSum(a,b){

console.log(a + b);
}
myFunctionSum(5, 15);
myFunctionSum(10,5);

//using function for temperature conversion

function toKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}
console.log(toKelvin(70))

//JavaScript objects.(it is a common practice to declare objects using const).JS objects cannot be compared.
//Never declare booleans,strings and numbers as objects because they can complicate and slow down code execution speed.
const car = {
type: "BMW",
color:"white",
model:3,
};
document.getElementById("demo").innerHTML = " I love " + car.color +" cars" + " my best car is " + car.type + car.model;
//JS strings
//slice
let str = ["apple","kiwi","orange","mango","cherry"];
let fruit = str.slice(2,5);// this slices out array index between 2 and 4 the last number(5) will not be included
let subfruits = str.slice(1,-2);// this slices the first index[1] starting from the begining and second array index[2] starting from the behind.
console.log(fruit);//"orange","mango","cherry"
console.log(subfruits);//kiwi.
//strings lengths
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = alphabets.length;
console.log(letters);

// toUpperCase and toLowerCase
let txt1 = "happiness"
let txt2 = "HELLO WORLD"
let text = txt1.toUpperCase();//changes txt1 to capital letters
text = txt2.toLowerCase();//changes txt2 to small letters
console.log(text)
// .trim() removes all whitespace from both sides of a string)
//.padStart() and.padEnd() method are used to pad a string with another string.
// let text1 = 5;
let padded = (base, pad, length = 5) => base.padStart(length,pad);

let pad1 = padded("World","Hi", 7)

console.log(pad1);

/* This is works as an arrow function where you pass 3 values which include the length. here the firstbase acts 
as the main number you want to declare, then pad2 is the padded values and length is the how long you
want the string to be.paddedsub is the shows the v alues to be printed out in the console */

let padded2 = (firstbase, pad2, length) => String(firstbase).padEnd(length, String(pad2));//To pad a number,you have to convert it into a string first.
 let paddedsub = padded2(4,0,3);
 console.log(paddedsub);

 //charAt returns the character of a specified index i.e the position.in a string
 let textMessage = "Love";
 let char = textMessage.charAt(2);
 console.log(char);//gives v

 // charAtCode returns the unicode at the specified index in a string,(UTF-16 code) which is usually between 0 and 65535.
 let textMessage2 ="Love";
 let charAt = textMessage2.charCodeAt(3);
 console.log(charAt);//gives 101(unicode of the character e)

 //JS split() method converts a string to an array.This prints out the chacter of the specified index in an array.

 const myValue = "happy";
 const mysplit = myValue.split(",");
 console.log(myValue[3]);

 //using  condition for split.This splits the words into individual strings and prints them out as an array.
 let myLetters = "World";
  const text5 = myLetters.split("");

  myLetters = "";
 for (i = 0; i < myLetters.length; i++) {
     text5 = myLetters[i] + "<br>";
}
 console.log(text5);

 /*JavaScript indexof: This returns the first occurrence/index im which a given element can be found and if not found
 it returns -1 */

 const animals = ['beast','bear','dog', 'goat','lion','goat'];
 console.log(animals.indexOf('goat'));
 console.log(animals.indexOf('tiger'));//this will give -1 since tiger is not part of the array.
//this will give out the output of the positions of the element
 const femaleNames = [];
 const indexes = ['aisha','biola','racheal','aisha','aisha'];
 const element = 'aisha';
 let idx = indexes.indexOf(element);
 while(idx != -1){
 femaleNames.push(idx)
     idx = indexes.indexOf(element, idx + 1);
 }
 console.log(femaleNames);

 // using conditional function.

 function vegetableinfo(veggies,veggie){
     if (veggies.indexOf(veggie) != -1){
         veggies.push(veggie);
         console.log('The new veggies collection is: ' + veggies);
     }
     else {
         console.log(veggie + ' is not available')
     }
 } 
 
 const veggies = ['potatao','spinach','carrot','tomato'];

 vegetableinfo(veggies,'cucumber');
 vegetableinfo(veggies,'spinach');

 //practicing conditional statements.
 function myStatement(fruits,foods){
     if(foods != 0 ){
         console.log('I really love eating: '+ foods);
     }
    else {
         console.log('I hate ' + foods);
     }
     if (fruits != 0 ){
         console.log('The fruits availaible are: ' + fruits)
     }
     else{
         console.log(fruits);
     }

    }
    const foods = ['Jollofrice', 'Beans', 'chicken', 'turkey'];
    const fruits = ['watermelon', 'apple', 'orange', 'carrot'];
    myStatement(fruits,'apple');
    myStatement(foods,'cherry');

// creating a guessing game
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const finalResult = document.querySelector('.finalResult');
const result = document.querySelector('.result');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessNumber = 1;
let resetButton;
    function startGuess(){
        const userGuess = guessField.value;
        if(userGuess === 1) {
            guesses.textContent = 'Previous guesses: ';
        }
        guesses.textContent = userGuess;

        if(userGuess === randomNumber){
            finalResult.textContent ='That\'s Right!! You are smart!';
            finalResult.style.backgroundColor = 'green';
            result.textContent = ' ';
            startOver();
        }
        else if (guessNumber === 10) {
           finalResult.textContent = 'You Lose!!!';
           result.textContent= ' ';
           startOver();
           }else{
               finalResult.textContent = 'Wrong Guess!';
               finalResult.style.backgroundColor = 'red';
               finalResult.style.color = 'white';
               if (userGuess < randomNumber) {
                   result.textContent = 'Last guess was too low! Try again.';
               }else if (userGuess > randomNumber) {
                   result.textContent = 'Last guess was too high! Try again'
               }
           }

           guessNumber++;
           guessField.value = '';
           guessField.focus();
           console.log(randomNumber);
    }

    guessSubmit.addEventListener('click', startGuess);
    
    function startOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
       // resetButton.textContent ='Start new game';
        guessSubmit.textContent = 'Start Again'
        document.body.append(resetButton);
        resetButton.addEventListener('click',resetGame)
    }
    
//To reset the game.
    function resetGame() {
        guessNumber = 1;

        const resetParas = document.querySelectorAll('.resetParas p')
        for (const resetPara of resetParas){
            resetPara.textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);

        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();

        guesses.textContent = '';
        finalResult.textContent ='';
        finalResult.style.backgroundColor = 'grey';
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }

    
    let increase = document.querySelector('.add')
    let minus = document.querySelector('.minus')
    let reset = document.querySelector('.reset')
    let count = document.querySelector('.start')

    let counter = 0;

    increase.addEventListener('click',function(){
        counter ++;
        count.innerHTML = counter;

    })

    minus.addEventListener('click',function(){
        counter-- ;
        count.innerHTML = counter;

    })
    reset.addEventListener('click',function(){
        counter = 0;
        count.innerHTML = counter;

    })

    

    const guessGame = document.querySelector('#guess-input');
    const startGame = document.querySelector('#num-guess');
    const mainResult = document.querySelector('#main-result');
    const guessResult = document.querySelector('#guess-result');
    const submitGame = document.querySelector('#submit-btn');

    let randomGuess = Math.floor(Math.random() * 100 + 1);

    let guess = 1;
    
    
    function game(){
        

        const userField = Number(guessGame.value);
    
    if (userField === 1){
        startGame.textContent = "previous guess: "
    }
    startGame.textContent += userField + " "

    if (userField === randomGuess){
        mainResult.textContent ="you are smart"
        mainResult.style.backgroundColor ="YELLOW" 
        guessResult.textContent =""
        submitGame.innerText = "start again"
        guessField.disabled= true;
        startGame.textContent = ""
        
        //setGameOver()
    }
    else if (guess === 10){
        mainResult.textContent = "Dang you losee"
        guessResult.textContent = " ";
        guessField.disabled = true
        
    //setGameOver()
    }
    else {
        mainResult.textContent ="Wrong guess"
        mainResult.style.backgroundColor ="red"
        guessField.disabled= false
        submitGame.innerHTML = "Submit guess"

     if (userField < randomGuess) {
        guessResult.textContent = "Number too low"
    }
    else if (userField > randomGuess) {
        guessResult.textContent = "Number too high"
    }
}
    guess++;
    guessGame.value="";
    guessField.focus()
    console.log(randomGuess)
    }
    submitGame.addEventListener('click', game)

   /* function setGameOver (){
        guessGame.disabled = true
       
    }*/

    //Random quotes api

    const quoteText = document.querySelector('.quote');
    const quoteBtn = document.querySelector('.quoteBtn');
    const authorName = document.querySelector('.name');
    const sound = document.querySelector('.sound');
    const copy = document.querySelector('.copy');
    const twitter = document.querySelector('.twitter');


    function randomQuote(){
        quoteBtn.innerText = "Loading quotes..."
        fetch ("https://api.quotable.io/random")
        .then(res => res.json())
        .then (result => {
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.innerHTML = "New Quote";
            
        })
    }

    sound.addEventListener ('click', ()=> {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
        speechSynthesis.speak(utterance);  
    });

    copy.addEventListener ('click', ()=> {
        navigator.clipboard.writeText(quoteText.innerText );
    });

    twitter.addEventListener('click',()=> {
let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText }`;
window.open(tweetUrl,"_blank")
    })

    quoteBtn.addEventListener ('click',randomQuote);

    //Accordion here

    const acc = document.getElementsByClassName('accordion');
    const panel = document.querySelector('.panel');
    for ( let i = 0; i < acc.length; i++){
        acc[i].addEventListener ('click', function() {
            this.classList.toggle("active");
            //let panel = this.nextElementSibling;
            if(panel.style.display === 'block'){
                panel.style.display = 'none'
            }
            else {
                panel.style.display = 'block'
            }
        
        })
    }