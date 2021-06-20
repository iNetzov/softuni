function addItem() {
    let listArray = document.querySelector('#items');
    let textBox = document.querySelector('#newItemText');
    let newElementAdd = document.createElement('li');
    newElementAdd.textContent = textBox.value;
    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href','#');
    deleteButton.textContent ='[Delete]'
    deleteButton.addEventListener('click',(e)=>{e.currentTarget.parentNode.remove()});
    newElementAdd.appendChild(deleteButton);

    listArray.appendChild(newElementAdd);
   
    
}