window.addEventListener('load', solve);

function solve() {

    let addBtn = document.querySelector('#add-btn');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let genre = document.querySelector('#genre').value;
        let name = document.querySelector("#name").value;
        let author = document.querySelector('#author').value;
        let date = document.querySelector('#date').value;
        let validatioArray = [genre, name, author, date];
        let container = {genre:genre ,name:name, author:author, date:date}

        document.querySelector('#genre').value = '';
        document.querySelector("#name").value= '';
        document.querySelector('#author').value = '';
        document.querySelector('#date').value = '';

        isItInvalid = validatioArray.some(e => e === '');
        if (isItInvalid) {
            console.log('not valid')
            return;
        }else {
            let childElement = createCollection(container);
            let parentElement = document.querySelector('.all-hits-container')
            parentElement.appendChild(childElement);
    }
})


function createCollection(container) {
    let div =  document.createElement('div');
    div.classList.add('hits-info');

    let img = document.createElement('img');
    img.src = './static/img/img.png'

    let h2Gener = document.createElement('h2');
    h2Gener.textContent =(`Genre: ${container.genre}`);
    
    let h2Name = document.createElement('h2');
    h2Name.textContent = `Name: ${container.name}`;

    let h2Author = document.createElement('h2');
    h2Author.textContent = `Author: ${container.author}`

    let h3Date = document.createElement('h3');
    h2Author.textContent = `Date: ${container.date}`

    let buttonSave = document.createElement('button');
    buttonSave.textContent= 'Save song';
    buttonSave.classList.add('save-btn');
    buttonSave.addEventListener('click',(e)=>{

        let div =  document.createElement('div');
        div.classList.add('hits-info');
    
        let img = document.createElement('img');
        img.src = './static/img/img.png'
    
        let h2Gener = document.createElement('h2');
        h2Gener.textContent =(`Genre: ${container.genre}`);
        
        let h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${container.name}`;
    
        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${container.author}`
    
        let h3Date = document.createElement('h3');
        h2Author.textContent = `Date: ${container.date}`
    
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-btn');
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click',(e)=>{
            let oldContainer = document.querySelector('.saved-container');
            oldContainer.innerHTML = '<h1>Saved songs</h1>';
        })

        div.appendChild(img);
        div.appendChild(h2Gener);
        div.appendChild(h2Name);
        div.appendChild(h2Author);
        div.appendChild(h3Date);
        div.appendChild(buttonDelete);
        let savedContainer = document.querySelector('.saved-container');
        savedContainer.appendChild(div);
        let oldContainer = document.querySelector('.all-hits-container')
        oldContainer.innerHTML = '<h1>Collection of songs</h1>';
    })
    

    let buttonLike = document.createElement('button');
    buttonLike.textContent = 'Like song';
    buttonLike.classList.add('like-btn')
    buttonLike.addEventListener('click',(e)=>{

      let element =   document.querySelector('.likes p');
      let textContent = element.textContent
      let collection  = textContent.split(': ');
      let number =  collection.pop();
      number = Number(number);
      element.textContent = `Total Likes: ${++number}`;
      buttonLike.disabled = true;
    })


    let buttonDelete = document.createElement('button');
    buttonDelete.textContent ='Delete';
    buttonDelete.addEventListener('click',(t) =>{
        t.target.parentNode.remove();
    })
    buttonDelete.classList.add('delete-btn');



div.appendChild(img);
div.appendChild(h2Gener);
div.appendChild(h2Name);
div.appendChild(h2Author);
div.appendChild(h3Date);
div.appendChild(buttonSave);
div.appendChild(buttonLike);
div.appendChild(buttonDelete);

return div;
}
}