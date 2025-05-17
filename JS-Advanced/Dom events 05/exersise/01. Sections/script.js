function create(words) {
   words = Array.from(words);
   let contend = document.querySelector('#content');
   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display ='none'
      p.textContent = word;
      div.addEventListener('click',(ev)=>{
         if(ev.target.children[0] !== undefined)
         {ev.target.children[0].style.display ='block'}
      });
      div.appendChild(p);
      contend.appendChild(div);  
   }
}
