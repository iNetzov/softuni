function focused() {
    let [...collection] = document.querySelectorAll('input[type="text"]');
    for (const e of collection){
        e.addEventListener('focus', (e)=>{
          e.target.parentNode.classList.add('focused');    
    });
    e.addEventListener('blur', (e)=> {
        e.target.parentNode.classList.remove('focused');
    }) 
    }
}