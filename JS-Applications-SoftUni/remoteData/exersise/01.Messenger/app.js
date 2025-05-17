function attachEvents() {
    let url = `http://localhost:3030/jsonstore/messenger`
    let nameField = document.querySelector('#author-id');
    let messageField = document.querySelector('#message-id');
    let buttonSend = document.querySelector('#submit');
    let buttonRefresh = document.querySelector('#refresh');
    let textArea = document.querySelector('#messages');
    buttonSend.addEventListener('click', () => {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author: nameField.value,
                content: messageField.value,
            })
        })
        nameField.value = "";
        messageField.value = "";
    });
    buttonRefresh.addEventListener('click', () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (const [key, value] of Object.entries(data)) {
                    textArea.value += `${value.author}:${value.content}\n`
                }
            });
        textArea.value = '';
    })

}

attachEvents();