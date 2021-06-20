function addItem() {
    let listArray = document.querySelector('#items');
    let textBox = document.querySelector('#newItemText');
    let newElementAdd = document.createElement('li');
    newElementAdd.textContent = textBox.value;
    listArray.appendChild(newElementAdd);
    textBox.value = ''; 
}