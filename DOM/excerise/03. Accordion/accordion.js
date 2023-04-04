function toggle() {
   let button =  document.querySelector('.button');

   if(button.textContent === 'More') {
    
        let extra  = document.querySelector('#extra');
        extra.style.display='block';    
        button.textContent  = "Less";       
   } else {
        let extra  = document.querySelector('#extra');
        extra.style.display='none';    
        button.textContent  = "More";   
   }
}