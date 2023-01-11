const bill = document.querySelector('#bills');
const people = document.querySelector('#people');
const custom =document.querySelector('.custom');
const peopleContainer = document.querySelector('.number');
const error = document.querySelector('.error');
const tipBtn = document.querySelectorAll('.box')
const tipAmount = document.querySelector('#tip-amount');
const totalAmount = document.querySelector('#total-amount');
const  resetBtn = document.querySelector('.reset');
let disabled = document.querySelector('.disabled');

disabled.addEventListener('click', () =>{});
bill.addEventListener('input', billsFunction);
people.addEventListener('input', peopleFunction);
custom.addEventListener('input', tipFunction);
custom.addEventListener('focus', tipFunction);



tipBtn.forEach((e) => {
    e.addEventListener('click',handleclick);
});

resetBtn.addEventListener('click', resetFunction);
bill.value="";
people.value= 0;
tipAmount.innerHTML="$" + (0.0).toFixed(2);
totalAmount.innerHTML="$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

disableBtn();

function enableBtn() {
resetBtn.classList.remove('disabled');
}

function disableBtn() {
    resetBtn.classList.add('disabled');
    }
    function calculateTip() {
        if (peopleValue >= 1){
            let tipCount = (tipValue + billValue) / peopleValue;
            let peopleTip = tipCount + peopleValue;
            let totalCount = (billValue + peopleTip) / peopleValue;
            tipAmount.innerHTML = "$" + tipCount.toFixed(2);
        totalAmount.innerHTML = "$" + totalCount.toFixed(2);
            }
    }

    function billsFunction(){
        billValue = parseFloat(bill.value);
        calculateTip();
        enableBtn();
    }

    function peopleFunction(){
        if (people.value < 1){
            error.style.display ="block";
            peopleContainer.style.border ="2px solid red";
 
        }else {
            error.style.display ="none";
            peopleContainer.style.border ="none";
            peopleValue = parseFloat(people.value);
            calculateTip();
            enableBtn();
 
        }
    }

    function handleclick(event){
        tipBtn.forEach((val)=>{
            val.classList.remove('active');
            if(event.target.innerHTML == val.innerHTML){
                val.classList.add('active');
                tipValue = parseFloat(val.innerHTML)/100;
            }
        });

        calculateTip();
        enableBtn();
        disableBtn();
    }

    function tipFunction(){
        tipValue = parseFloat(custom.value/100);
        tipBtn.forEach((btn)=>{
            btn.classList.remove('active');
        })
        calculateTip();
        enableBtn();
    }

    function resetFunction() {
        bill.value ="";
        custom.value ="";
        people.value = 1;
        tipAmount.value ="$" + (0.0).toFixed(2);
        totalAmount.value ="$" + (0.0).toFixed(2);
      disableBtn();
    }