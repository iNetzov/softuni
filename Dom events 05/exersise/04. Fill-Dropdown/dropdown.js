function addItem() {
    let textBox = document.querySelector('#newItemText');
    let valueBox = document.querySelector('#newItemValue');
    let menu = document.querySelector('#menu')
    let option = document.createElement('option');
    option.textContent = textBox.value;
    option.value = valueBox.value;
    menu.appendChild(option);
    textBox.value = '';
    valueBox.value = '';
}