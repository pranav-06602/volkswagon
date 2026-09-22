let forwardButton = document.querySelector('.nxt-btn');
let previousButton = document.querySelector('.prv-btn');
let slider1 = document.querySelector('.slider-1');
let slider2 = document.querySelector('.slider-2')

let index = 0;

forwardButton.addEventListener('click', () => {
  index++;

  if(index >0){
    previousButton.classList.add("active");
  }
  
  slider1.style.transform = `translateX(-${index * 415}px)`;
  
  
  
  
  if(index === 4){
    
    forwardButton.style.display = 'none';
  }
});



previousButton.addEventListener('click',()=>{
          
  if(index > 0){
    index--;
  }
  
  slider1.style.transform = `translateX( -${index * 415}px)`;

  if(index<=3){
    forwardButton.style.display = 'block';
  } if(index === 0){
    previousButton.classList.remove('active');
  }
    
})


let forwardButton2 = document.querySelector('.nxt-btn-2');
let previousButton2 = document.querySelector('.prv-btn-2');

let index2 = 0
forwardButton2.addEventListener('click',()=>{
  
  if(index <6){
    index2++
  }
  previousButton2.style.display = 'block'
  slider2.style.transform = `translateX(-${index2 * 430}px)`;

  if(index2===6){
    forwardButton2.style.display = 'none';
  }
  
})
    

previousButton2.addEventListener("click",()=>{
  if(index2>0){
    index2--
  }
  if(index2===0){
    previousButton2.style.display = 'none'
  }
  forwardButton2.style.display = 'block';
  slider2.style.transform = `translate(-${index2*410}px)`;

})



