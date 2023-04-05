function attachEvents() {
    let BASE_URL ='http://localhost:3030/jsonstore/phonebook';
    let loadBtn = document.querySelector('#btnLoad');
    let addBtn = document.querySelector('#btnCreate');
    let phonebook = document.querySelector('#phonebook');
    let usersCollection = [];


    loadBtn.addEventListener('click',async function load(){
        phonebook.innerHTML = "";

        try {
            let getUsersResponse = await fetch(BASE_URL, {method:'GET'});
            let getUsersData = await getUsersResponse.json();

            // console.log(getUsersData);   
            for (const key in getUsersData) {
                usersCollection[key] = getUsersData[key];
               let liUser =  document.createElement('li');
               let deleteButton = document.createElement('button');
               deleteButton.id = key;
               deleteButton.textContent = 'Delete';
               deleteButton.classList.add('delete-selector');              
               liUser.textContent = `${getUsersData[key].person}: ${getUsersData[key].phone}`;
               liUser.appendChild(deleteButton);
               phonebook.appendChild(liUser);
            }
            let deleteButtonsCollection = document.querySelectorAll('.delete-selector');
            // console.log(deleteButtonsCollection);
            for (const btn of deleteButtonsCollection) {
                // console.log(btn);
                btn.addEventListener('click',async (e) => {
                    try{ 
                       let deleteRequst =  await fetch(BASE_URL+`/${e.target.id}`,{method:'DELETE'});
                       let deleteData = await deleteRequst.json();
                     load();
                    } catch(e){
                        console.log(e);
                    }

                })
            }
        
        } catch(e) { 
            console.log(e);
        }

    });


    addBtn.addEventListener('click',async()=> {
       let personField =  document.querySelector('#person');
       let phoneField = document.querySelector('#phone');
       try {
        let postObj = {
            person:personField.value,
            phone:phoneField.value
        }
        let configuration = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postObj)
        }
       let postResponse  = await fetch(BASE_URL,configuration);
       let postData =postResponse.json();
       personField.value ='';
       phoneField.value = '';
       loadBtn.click();
       }catch(e){
        console.log(e);
       }
    })
}

attachEvents();