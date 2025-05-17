import articlesData from '../articlesData.js';
import {titleFromatter} from '../utils.js';

const articleTemplate = (data) =>/*javascript*/ `
<article>
    <header>
        <h1>${data.title}</h1>
    </header>
    <main>
        <p>${data.contnet}</p>
    </main>
    <footer>
        <p>Created by: {data.author || 'Jonh Doe'}</p>
        <button id="finish-btn">finished</button>
    </footer>
</article>
`;

export default function (context){
    let rootElement = document.querySelector('.root');
    let currentArticle = articlesData.find(x=>titleFromatter(x.title)== context.params.articleId);
    rootElement.innerHTML =articleTemplate(currentArticle);
  console.log(context.params.articleId);
  rootElement.querySelector('#finish-btn').addEventListener('click',()=>{
      context.page.redirect('/articles');
  })
}