function addItem() {
  let  collection = document.getElementById('items');
  let newElement = document.createElement('li')
  let text  = document.querySelector(`input[type='text']`).value

  newElement.textContent = text;
  collection.appendChild(newElement);
}