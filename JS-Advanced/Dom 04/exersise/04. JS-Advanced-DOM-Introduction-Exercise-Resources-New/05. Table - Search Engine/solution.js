function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let  sboxValue = document.querySelector('#searchField').value;
     let trArrays = document.querySelectorAll('tbody td');
     let changeToBlack = Array.from(document.querySelectorAll('tbody tr'));
     changeToBlack.forEach(x=>{
        x.className=''});
     for (const el of trArrays) {
        if(el.textContent.includes(sboxValue)){
            el.parentNode.className = 'select';
        }
     }
     document.querySelector('#searchField').value = ''
     console.log(sboxValue);
   }
}