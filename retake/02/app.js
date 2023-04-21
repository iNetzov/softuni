window.addEventListener("load", solve);

function solve() {
  let title  = document.querySelector('#task-title');
  let category  = document.querySelector('#task-category');
  let content  = document.querySelector('#task-content');
  let pubicshBtn = document.querySelector('#publish-btn');

  pubicshBtn.addEventListener('click',(e)=>{
    if(title.value === "" || category.value === "" || content.value === ""){
        
      } else{
        let containerReviewList = document.querySelector('#review-list');
        // console.log(containerReviewList);
        
        let liElement = document.createElement('li');
        liElement.classList.add('rpost');
        
        let article  = document.createElement('article');
        
        let h4 = document.createElement('h4');
        h4.textContent = title.value;
                
        let pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${category.value}`
        pCategory.classList.add('category')

        let pContent = document.createElement('p');
        pContent.textContent = `Content: ${content.value}`;
        pContent.classList.add('content');

        let editBtn = document.createElement('button');
        editBtn.textContent = 'EDIT'
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', (e) => {
            let currentContainer = e.target.parentNode;
          let titleReview = currentContainer.querySelector('h4');
          let categoryReview = currentContainer.querySelector('.category');
          let contentReview = currentContainer.querySelector('.content');
          title.value = '';
          category.value = '';
          content.value = '';
          title.value = titleReview.textContent;
        //   categoryArray = categoryReview.textContent.split('Category:');
        //   console.log(categoryArray);
          category.value = categoryReview.textContent.split('Category: ')[1];
          content.value = contentReview.textContent.split('Content: ')[1];
          console.log(categoryReview.textContent.split('Category: ')[1]);
          currentContainer.remove();
        })

        let postBtn = document.createElement('button');
        postBtn.textContent = 'POST'
         postBtn.classList.add('action-btn'); 
         postBtn.classList.add('post');
         postBtn.addEventListener('click', (e) => {
            let currentContainer = e.target.parentNode;

            let newItem = currentContainer;
            console.log(`this is it ${newItem}`);
            newItem.querySelector('.post').remove();
            newItem.querySelector('.edit').remove();

            currentContainer.remove();
            let newContainer = document.querySelector('#published-list');
            newContainer.appendChild(newItem);
         })

         article.appendChild(h4);
         article.appendChild(pCategory);
         article.appendChild(pContent);
         liElement.appendChild(article);
         liElement.appendChild(editBtn);
         liElement.appendChild(postBtn);

         containerReviewList.appendChild(liElement);

    title.value = '';
    content.value = '';
    category.value = '';
      }
  })
}