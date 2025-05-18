function create(words) {
   let container = document.querySelector('#content');
   for (const word of words) {
      let divEl = document.createElement('div');
      let paraEl = document.createElement('p');
      paraEl.style.display="none";
      paraEl.textContent = word;
      divEl.appendChild(paraEl);
      divEl.addEventListener('click',(e)=>{
        e.target.children[0].style.display= 'block';
      })
      container.appendChild(divEl);
   }
}