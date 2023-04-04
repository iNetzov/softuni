function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let collection  =  document.querySelectorAll('tbody tr');
     let selector = document.querySelector('#searchField');
     let selectorText= selector.value;
     let [...selectedCollection] = document.querySelectorAll('.select');
     selectedCollection.map( e => e.classList.remove('select'));
     for (const el of collection) {
      let childernCollection  = el.children;
      let isItTrue = false;
      for (const child of childernCollection) {
         if(child.textContent === selectorText){
            isItTrue  = true;
         }
      }
      if(isItTrue){
         el.classList.add('select');
      }
     }
     selector.value = '';
   }
}