function solve() {
    let inputForm = document.querySelector('#input-form');
    let url = `http://localhost:3030/jsonstore/collections/books`
    let titleField = document.querySelector('#titleInput');
    let authorField = document.getElementById('authorId');
    let loadAllBooksBtn = document.querySelector('#loadBooks');
    let booksLine = document.querySelector('#book-lines');
    let formInput = document.querySelector('#input-form');
    let dataForm = new FormData(formInput);
    let submitBtn = document.querySelector('#submit');
    // console.log(booksLine);
    inputForm.addEventListener('submit', sendSubmitForm);
    loadAllBooksBtn.addEventListener('click', clickedLoadBtn);
    booksLine.addEventListener('click', clickedDeleteBtn);









    //sending new Book to server;
    async function sendSubmitForm(e) {
        e.preventDefault();
        if (submitBtn.classList.length === 1) {
            submitBtn.classList.remove('edit')
            let title = titleField.value;
            let author = authorField.value;
            //console.log(title);
            // console.log(author);
            titleField.value = '';
            authorField.value = '';
            await fetch(`${url}/${submitBtn.name}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ author: author, title: title })
            });

        } else {
            let data = new FormData(e.currentTarget);
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    author: data.get('author'),
                    title: data.get('title')
                })
            }).catch(e => { console.log(`${e} ->this  went wrong`) })
            titleField.value = '';
            authorField.value = '';
        }
    }
    //sending new |Books to server;

    //loading all books;
    async function clickedLoadBtn() {
        booksLine.textContent = '';
        await fetch(url)
            .then(ress => ress.json())
            .then(data => {
                for (const [key, value] of Object.entries(data)) {
                    createHtmlElement(value.title, value.author, key);
                }
            });
    }
    //loading all books 
    //creating html Elements
    function createHtmlElement(title, author, id) {
        let tr = document.createElement('tr');
        let tdTitle = document.createElement('td');
        tdTitle.textContent = title
        let tdAuthor = document.createElement('td');
        tdAuthor.textContent = author
        let tdButtons = document.createElement('td');
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'
        tdButtons.appendChild(editButton);
        tdButtons.appendChild(deleteButton);
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdButtons);
        tr.id = id;
        booksLine.appendChild(tr);
    }
    //creating html elements

    //clicked deleteBtn
    async function clickedDeleteBtn(e) {
        if (e.target.textContent === 'Delete') {
            let trTarget = e.target.parentNode.parentNode;
            let dataId = trTarget.id
            await fetch(`${url}/${dataId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            booksLine.removeChild(trTarget);

        } else if (e.target.textContent === 'Edit') {
            let elementTr = e.target.parentNode.parentNode;
            let titleAndAuthorList = elementTr.childNodes;
            let title = titleAndAuthorList[0].textContent;
            let author = titleAndAuthorList[1].textContent;
            titleField.value = title;
            authorField.value = author;
            submitBtn.classList.add('edit')
            submitBtn.name = (`${elementTr.id}`);
          //  console.log(submitBtn);


        }


    }
}
solve()