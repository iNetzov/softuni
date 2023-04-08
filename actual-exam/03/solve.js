// TODO:
function attachEvents() {
    let loadBtn = document.querySelector('#load-board-btn');
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    let addBtn = document.querySelector('#create-task-btn');
    loadBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
          let a = document.querySelector('#todo-section>ul').innerHTML ='';
          let a1 = document.querySelector('#in-progress-section>ul').innerHTML ='';
          let a2 = document.querySelector('#code-review-section>ul').innerHTML ='';
          let a3 = document.querySelector('#done-section>ul').innerHTML ='';
            console.log(a);
            let response = await fetch(BASE_URL, { method: "GET" });
            let data = await response.json();
            for (const key in data) {
                let title = data[key].title;
                let description = data[key].description;
                let status = data[key].status;
                let id = data[key]._id;
                createElement(title, description, status, id);

            }



        } catch (e) { }


    })
    addBtn.addEventListener('click',async(e) => {
        e.preventDefault();
        let titleField = document.querySelector('#title');
        let descriptionField = document.querySelector('#description');
        let obj = {
            title:titleField.value,
            description:descriptionField.value,
            status:'ToDo'
        };
        document.querySelector('#title').value = '';
        document.querySelector('#description').value = '';
        // console.log(obj);
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        }

        let response =  await fetch(BASE_URL, config);
        let data = await response.json();
        console.log(data);
        

        document.querySelector('#load-board-btn').click();


    })




    function createElement(title, description, status, id) {
        let li = document.createElement('li');
        li.classList.add('task');

        let h3 = document.createElement('h3');
        h3.textContent = title

        let p = document.createElement('p');
        p.textContent = description;

        li.appendChild(h3);
        li.appendChild(p);

        if (status === 'ToDo') {
            let button = document.createElement('button');
            button.setAttribute('idForTask',id)
            button.textContent = `Move to In Progress`
            button.addEventListener('click',async(e)=>
            {
                let neededId = e.target.getAttribute('idfortask');
                console.log(neededId);
                let obj = {status:'In Progress'}
                let config = {
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                }
                try{
                    let response = await fetch(BASE_URL+neededId,config);
                    let data  = await response.json();
                document.querySelector('#load-board-btn').click();
                }catch(e){

                }
                
            })

            li.appendChild(button);
            let parentEl = document.querySelector('#todo-section>ul.task-list');
            parentEl.appendChild(li);

        } else if (status === 'In Progress') {
            let button = document.createElement('button');
            button.setAttribute('idForTask',id)
            button.textContent = `Move to Code Review`
            button.addEventListener('click',async(e)=>
            {
                let neededId = e.target.getAttribute('idfortask');
                console.log(neededId);
                let obj = {status:'Code Review'}
                let config = {
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                }
                try{
                    let response = await fetch(BASE_URL+neededId,config);
                    let data  = await response.json();
                document.querySelector('#load-board-btn').click();
                }catch(e){

                }
                
            })
            li.appendChild(button);
            let parentEl = document.querySelector('#in-progress-section>ul.task-list');
            parentEl.appendChild(li);




        } else if (status === 'Code Review') {
            let button = document.createElement('button');
            button.setAttribute('idForTask',id)
            button.textContent = `Move to Done`
            button.addEventListener('click',async(e)=>
            {
                let neededId = e.target.getAttribute('idfortask');
                console.log(neededId);
                let obj = {status:'Done'}
                let config = {
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                }
                try{
                    let response = await fetch(BASE_URL+neededId,config);
                    let data  = await response.json();
                document.querySelector('#load-board-btn').click();
                }catch(e){

                }
                
            })

            
            li.appendChild(button);
            let parentEl = document.querySelector('#code-review-section>ul.task-list');
            parentEl.appendChild(li);




        } else if (status === 'Done') {
            let button = document.createElement('button');
            button.setAttribute('idForTask',id)
            button.textContent = `Close`
            button.addEventListener('click',async(e)=>
            {
                let neededId = e.target.getAttribute('idfortask');
                console.log(neededId);
                // let obj = {status:'In Progress'}
                let config = {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                    // body: JSON.stringify(obj)
                }
                try{
                    let response = await fetch(BASE_URL+neededId,config);
                    let data  = await response.json();
                document.querySelector('#load-board-btn').click();
                }catch(e){

                }
                
            })

            
            li.appendChild(button);
            let parentEl = document.querySelector('#done-section>ul.task-list'); 
            parentEl.appendChild(li);
        }


    }
}

attachEvents();