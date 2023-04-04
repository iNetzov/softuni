function addItem() {
   let name =  document.querySelector('#newItemText');
   let value1 =  document.querySelector('#newItemValue');
   let menuContainer = document.querySelector('#menu');

   let option = document.createElement('option');
   option.textContent = name.value;
   option.value = value1.value
   
   menuContainer.appendChild(option);
   name.value = '';
   value1.value = '';
//    console.log(name);
//    console.log(value);
}