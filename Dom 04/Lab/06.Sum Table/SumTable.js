function sumTable() {
   const tr =  document.querySelectorAll('tr');
//console.log(tr);
let total = 0;
for(let i =1; i<tr.length-1;i++){
    let tdArray = tr[i].children;
    let price = Number(tdArray[1].textContent);
    total += price;
}
let totalFields = (tr[tr.length-1].children);
totalFields[1].textContent = total;


}