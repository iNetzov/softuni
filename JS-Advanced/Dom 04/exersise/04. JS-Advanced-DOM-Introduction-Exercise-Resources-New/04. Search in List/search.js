function search() {
   let liArray = Array.from(document.querySelectorAll('#towns li'));
   let sbox = document.querySelector('#searchText').value;
   let counter = 0;
   for (const el of liArray) {
      if (el.textContent.includes(sbox)) {
         el.style.textDecoration = 'underline'
         el.style.fontWeight = 'bold'
         counter++;
      } else {

      }
      let result = document.querySelector('#result');
      result.textContent = `${counter} matches found`;
   }

}

