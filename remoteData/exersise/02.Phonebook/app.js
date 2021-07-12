function attachEvents() {
    let personField = document.querySelector('#person');
    let phoneField = document.querySelector('#phone');
    let createButton = document.querySelector('#btnCreate');
    let loadButton = document.querySelector('#btnLoad');
    let phoneBook = document.querySelector('#phonebook');
    let url = 'http://localhost:3030/jsonstore/phonebook';

    createButton.addEventListener('click', () => {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    person: personField.value,
                    phone: phoneField.value,
                })
        });
        personField.value = '';
        phoneField.value = '';
    });

    loadButton.addEventListener('click', () => {
        fetch(url)
            .then(ress => ress.json())
            .then(data => {
                for (const [key, value] of Object.entries(data)) {
                    let li = document.createElement('li');
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'delete'
                    deleteBtn.id = `${key}`;
                    li.textContent = `${value.person} ${value.phone}`
                    li.appendChild(deleteBtn)
                    phoneBook.appendChild(li);
                }
            })
        phoneBook.textContent = '';
    })
    phoneBook.addEventListener('click', (e) => {
        let idClicked = e.target.id;
        let liClicked = e.target.parentNode;
        phoneBook.removeChild(liClicked);
        fetch(`${url}/${idClicked}`,{
            method:'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
               },
        })
    })

}

attachEvents();