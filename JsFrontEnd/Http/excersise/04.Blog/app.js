function attachEvents() {

    let postCollection = [];
    let commentsCollection = [];
    let postsList = document.querySelector('#posts');
    let BASE_URL = 'http://localhost:3030/jsonstore/blog/';

    let loadBtn = document.querySelector('#btnLoadPosts');
    let viewBtn = document.querySelector('#btnViewPost');
    

    loadBtn.addEventListener('click', async (e) => {
        let POST_URI = 'posts'
        try {
            let responsePost = await fetch(BASE_URL + POST_URI, { method: "GET" });
            let dataPost = await responsePost.json();
            // console.log(dataPost);
            for (const key in dataPost) {
                collectPostToCollection(key, dataPost[key].body, dataPost[key].title);

                let option = document.createElement('option');
                option.value = key;
                option.textContent = dataPost[key].title;
                postsList.appendChild(option);
            }
        } catch (e) {
            console.log(e);
        }
    });

    viewBtn.addEventListener('click',async (e)=> {
        
        let COMMENTS_URI  = 'comments';
        
        try {
           let commentsResponse =  await fetch(BASE_URL + COMMENTS_URI, {method:"GET"});
           let commentsData = await commentsResponse.json();
        //    console.log(commentsData);
            let neededKey = document.querySelector('#posts').value;

            for (const key in commentsData) {
                if(commentsData[key].postId === neededKey) {
                    // console.log(commentsData[key]);
                 collectCommentsToCollection(commentsData[key].id,commentsData[key].text);
                }
            }
            createPostSection(neededKey);
            populateCommentsContainer();
           

    
        } catch(e){
console.log(e);
        }






    })

    function populateCommentsContainer() {
       let container =  document.querySelector('#post-comments');
        for (const comment of commentsCollection) {
            let li = document.createElement('li');
            li.textContent = comment.text;
            li.id = comment.id;
            container.appendChild(li);
        }
    }

    function createPostSection(neededKey){
        console.log(postCollection);
        document.querySelector('#post-title').textContent = postCollection[neededKey].title;
        document.querySelector('#post-body').textContent = postCollection[neededKey].body;
    }

    function collectPostToCollection(id, body, title) {
        let objectToHold = { body: "", title: "" };
        objectToHold.body = body;
        objectToHold.title = title;
        postCollection[id] = objectToHold;

    }
    function collectCommentsToCollection(id,text){
        let comment = {id:"", text:""}
        comment.id = id;
        comment.text = text;
        commentsCollection.push(comment);
    }
}

attachEvents();