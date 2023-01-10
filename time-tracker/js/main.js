const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');

window.addEventListener('load',(ev)=>{
    fetch('./js/data.json').then(response =>{
        return response.json();
    }).then(data =>{
        data.forEach((value,index)=>{
     const current = value.timeframes.daily.current;
     const previous = value.timeframes.daily.previous;
     const title = value.title;
     console.log(current)

     const titleEle = document.getElementById(`title-${index}`);
     const currenthours = document.getElementById(`hours-${index}`);
     const track = document.getElementById(`track-${index}`);

     titleEle.innerText = title;
     currenthours.innerText = current.toString() +" hrs"
    
        })
    })
});

daily.addEventListener('click',function(){
    fetch('./js/data.json').then(response =>{
        return response.json();
    }).then(data =>{
        data.forEach((value,index)=>{
     const current = value.timeframes.daily.current;
     const previous = value.timeframes.daily.previous;
     const title = value.title; 

     const titleEle = document.getElementById(`title-${index}`);
     const currenthours = document.getElementById(`hours-${index}`);
     const track = document.getElementById(`track-${index}`);

     titleEle.innerText = title;
     currenthours.innerText = current.value
    
    })
})
});

