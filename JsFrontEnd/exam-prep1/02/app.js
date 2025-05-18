window.addEventListener("load", solve);

function solve() {
  //  let firstNameField =  document.querySelector('#first-name');
  let formBtn = document.querySelector('#form-btn');
  let previewList = document.querySelector('#preview-list');

  let domColelction = {
    firstNameField: document.querySelector('#first-name').value,
    lastNameField: document.querySelector('#last-name').value,
    ageField: document.querySelector('#age').value,
    storyTitleField: document.querySelector('#story-title').value,
    genreDropDownField: document.querySelector('#genre').value,
    storyTextBoxField: document.querySelector('#story').value,
  };
  
  formBtn.addEventListener('click',(e)=>{ 
    // console.log(domColelction);
    let allFieldHaveValue = Object.values(domColelction).every((input)=> input.value !== "");

    if (!allFieldHaveValue) {
    
      return;
    } else {
     let parentElement =  document.querySelector('#preview-list');
     parentElement.appendChild(createDomElements());
     formBtn.disabled  = true;
     document.querySelector('#first-name').value = ''
    document.querySelector('#last-name').value = ''
    document.querySelector('#age').value = ''
    document.querySelector('#story-title').value = ''
    document.querySelector('#story').value = ''
    //  createDomElements();
    }
    

  function createDomElements () {
    formBtn.disabled  = true;
    let li = document.createElement('li');
    li.classList.add('story-info');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${domColelction.firstNameField.value} ${domColelction.lastNameField.value}`

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${domColelction.ageField.value}`;
    
    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${domColelction.storyTitleField.value}`

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${domColelction.genreDropDownField.value}`;

    let pTextBox = document.createElement('p');
    pTextBox.textContent = domColelction.storyTextBoxField.value;
    
    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pTextBox);

   let saveBtn =  document.createElement('button');
   saveBtn.classList.add('save-btn');
   saveBtn.textContent = 'Save Story';
   saveBtn.addEventListener('click', saveBtnFunction)

   let editBtn =  document.createElement('button');
   editBtn.classList.add('edit-btn');
   editBtn.textContent = 'Edit Story';
   editBtn.addEventListener('click', editBtnFunction);

   let deleteBtn =  document.createElement('button');
   deleteBtn.classList.add('delete-btn');
   deleteBtn.textContent = 'Delete Story';
   deleteBtn.addEventListener('click', deleteBtnFunction)


li.append(article);
li.append(saveBtn);
li.append(editBtn);
li.append(deleteBtn);

return li;
  }
  })

  function editBtnFunction () {
    deleteBtnFunction();
    console.log(domColelction);
    formBtn.removeAttribute('disabled');
    let element =  domColelction.firstNameField;
    element.value =domColelction.firstNameField.value;
     domColelction.lastNameField.value = '';
     domColelction.ageField.value = '';
     domColelction.storyTitleField.value = '';
     domColelction.storyTextBoxField.value = '';

  }

  function deleteBtnFunction () {
    formBtn.disabled  = false;
   let parent =  document.querySelector('#preview-list')
   parent.innerHTML = '<h3>Preview</h3>';
  }

  function saveBtnFunction(){
    
  document.querySelector('#main').innerHTML = '<h1>Your Scary story is saved!</h1>';
  }
}
