function addItem() {
   let container  = document.querySelector("#items");
   let deleteButton = document.createElement('a')
   deleteButton.textContent = '[Delete]';
   deleteButton.setAttribute("href","#")
   
   deleteButton.addEventListener('click', (e) => {
    (e.target.parentNode).remove()
   })

   let liElement = document.createElement('li');
   liElement.textContent = document.querySelector('#newItemText').value.trim();
//    liElement.textContent += deleteButton;
   liElement.appendChild(deleteButton)
   container.appendChild(liElement);
}