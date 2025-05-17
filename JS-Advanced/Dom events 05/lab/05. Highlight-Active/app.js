function focused() {
  let input = document.querySelectorAll("input[type='text']");
  for (const inp of input) {
      inp.addEventListener('focus',(ev)=>{ev.target.parentNode.className = 'focused'});
      inp.addEventListener('blur',(ev)=>{ev.target.parentNode.className = ''});
      
  }

}