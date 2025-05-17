import articlesData from "../articlesData.js";
import { titleFromatter } from "../utils.js";
const articlesTemplate = (data) =>/*javascript*/`
<article>
    <h3>${data.title}</h3>
    <a href="/articles/${titleFromatter(data.title)}">Read more</a>
    <footer>some Footer here</footer>
</article>
`; 


export default function (context){
    let rootElement = document.querySelector('.root');
    let articlesHtml = articlesData.map(a=>articlesTemplate(a)).join('');
    console.log('articles loaded');
    console.log(context);
    //not the corret only for demo 
    rootElement.innerHTML =articlesHtml;
}