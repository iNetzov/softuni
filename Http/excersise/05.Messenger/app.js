function attachEvents() {
   let refreshBtn =  document.querySelector('#refresh');
   let submitBtn =  document.querySelector('#submit');
   let BASE_URL = 'http://localhost:3030/jsonstore/messenger';
   let textArea  = document.querySelector('#messages');
   
   let GET_REQUEST = 'GET';
   let POST_REQUEST = 'POST';
   refreshBtn.addEventListener('click', async (e)=>{
    try {
        textArea.textContent = "";
        let refreshResponse = await fetch(BASE_URL,{method:GET_REQUEST});
        let refreshData = await refreshResponse.json();

        let array = [];
        console.log(refreshData);
        for (const key in refreshData) {
            console.log(refreshData[key]);
           let {author,content}  = refreshData[key]
           array.push(`${author}: ${content}`);
        }
        // console.log(array.join('\n'));
        textArea.textContent = array.join('\n');
    
     } catch(e) {
        console.log(e)
    }

   });

   submitBtn.addEventListener('click',async (e) =>{ 
    try {
        let authorValue = document.querySelector('input[name="author"]').value;
        let messageValue = document.querySelector('input[name="content"]').value;
        let bodyObj = {
            author:authorValue,
            content:messageValue
        }

        let configuration  = {
            method: POST_REQUEST,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyObj)
        }
       let postResponse =  await fetch(BASE_URL,configuration);
       let postData = await postResponse.json();
       console.log(postData);


    } catch (e) {

    }
   })

}

attachEvents();