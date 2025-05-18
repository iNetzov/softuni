function sumTable() {
let [...collection]  = document.querySelectorAll('tr');
collection.pop();
collection.shift();
let filterdCollection  =  collection;
let totalSum = 0;
for (const e of filterdCollection) {
   let [name, price] = e.children
   price = Number(price.textContent);
   totalSum += price;
}
document.querySelector('#sum').textContent = totalSum;
}