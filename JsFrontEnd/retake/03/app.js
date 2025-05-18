function solve() {
    let loadBtn = document.querySelector('#load-course');
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    let titleA = document.querySelector('#course-name');
    let typeA = document.querySelector('#course-type');
    let descrA = document.querySelector('#description');
    let teacherA = document.querySelector('#teacher-name');
    let addBtnA =  document.querySelector(`#add-course`);
    let editBtnA = document.querySelector('#edit-course');
    loadBtn.addEventListener('click', async (e) => {
        let response = await fetch(BASE_URL, { method: 'GET' });
        let data = await response.json();
        console.log(data);
        let container = document.querySelector('#list');
        //    console.log(container)
        container.innerHTML = '';


        for (const el in data) {
            // console.log(data[el]);

            let divEl = document.createElement('div');
            divEl.classList.add('container');

            let h2El = document.createElement('h2');
            h2El.textContent = data[el].title;

            let h3TeacherEl = document.createElement('h3');
            h3TeacherEl.classList.add('teacher');
            h3TeacherEl.textContent = data[el].teacher

            let h3TypeEl = document.createElement('h3');
            h3TypeEl.classList.add('type');
            h3TypeEl.textContent = data[el].type;

            let h4El = document.createElement('h4');
            h4El.textContent = data[el].description;

            let editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit Course'
            editBtn.setAttribute('keyId',data[el]._id);
            editBtn.addEventListener('click', (e) => {
                let oldContainer = e.target.parentNode
                document.querySelector(`#course-name`).value = oldContainer.querySelector('h2').textContent;
                document.querySelector(`#course-type`).value = oldContainer.querySelector('.type').textContent;
                document.querySelector(`#teacher-name`).value = oldContainer.querySelector('.teacher').textContent;
                document.querySelector(`#description`).value = oldContainer.querySelector('h4').textContent;
                document.querySelector('#add-course').disabled = true;
                document.querySelector('#edit-course').disabled = false;
               let button =  oldContainer.querySelector('.edit-btn');
                editBtnA.setAttribute('keyid',button.getAttribute('keyid'));
                oldContainer.remove();
            })

            let finishBtn = document.createElement('button');
            finishBtn.classList.add('finish-btn')
            finishBtn.setAttribute('keyId',data[el]._id);
            finishBtn.textContent = 'Finish Course';
            finishBtn.addEventListener('click',async(e)=> {
               let target =  e.target.parentNode
            //    console.log(e);
              let newTarget =  e.target.getAttribute('keyid');
              console.log(newTarget);
              let resposne =  await  fetch(BASE_URL+newTarget,{method:'DELETE'})
              await response;
              console.log(response);
              document.querySelector('#load-course').click();
            })

            divEl.appendChild(h2El);
            divEl.appendChild(h3TeacherEl);
            divEl.appendChild(h3TypeEl);
            divEl.appendChild(h4El);
            divEl.appendChild(editBtn);
            divEl.appendChild(finishBtn);
            container.appendChild(divEl);

        }
    })
    let editBtn = document.querySelector('#edit-course');
    editBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        let idForPut = e.target.getAttribute('keyid');
        console.log(idForPut);
        let obj  = {description:`${document.querySelector('#description').value}`,
            teacher:`${document.querySelector('#teacher-name').value}`,
            title:`${document.querySelector('#course-name').value}`,
            type:`${document.querySelector('#course-type').value}`,
            _id:idForPut
        }
        if(obj.type === 'Long' || obj.type === 'Medium' || obj.type === 'Short'){
            let heders  =  {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            }
            try{
                let response =  await fetch(BASE_URL+idForPut,heders);
                let data  = await response.json();
                console.log(data);    
            }catch(e) {
                console.log(e);
            }
            titleA.value = '';
            typeA.value = '';
            descrA.value = '';
            teacherA.value = '';
            editBtnA.disabled = true;
            addBtnA.disabled = false;
        
        }

    })

    addBtnA.addEventListener('click',async (e) => {
        e.preventDefault();
        let obj  = {description:`${document.querySelector('#description').value}`,
            teacher:`${document.querySelector('#teacher-name').value}`,
            title:`${document.querySelector('#course-name').value}`,
            type:`${document.querySelector('#course-type').value}`,
        }
        console.log(obj);
        if(obj.type === 'Long' || obj.type === 'Medium' || obj.type === 'Short'){
            let heders  =  {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            }
           let respond =  await fetch(BASE_URL, heders);
            let data  =  await respond.json();
            document.querySelector('#load-course').click();
            titleA.value = '';
            typeA.value = '';
            descrA.value  = '';
            teacherA.value = '';
        }
    })
}

solve();