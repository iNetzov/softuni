function colorize() {
   let tableTr =  document.querySelectorAll('table tr');
   for(let i = 1; i<tableTr.length; i+=2){
       tableTr[i].style.backgroundColor ='Teal';
   }
}