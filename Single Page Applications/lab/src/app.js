import loginPage from './loginPage.js';
import registerPage from './registerPage.js';
import moviesPage from './moviesPage.js'; 


let headerElement = document.querySelector('.header .nav');
let pages = {
    register: registerPage,
    login: loginPage,
    movies: moviesPage,
};

headerElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        let dataLink = e.target.getAttribute('data-link');

        if (Object.keys(pages).includes(dataLink)) {
            hidePage();
            let currentView = pages[dataLink];
            currentView.showPage();
        }



    }
});

function hidePage(){
    Object.values(pages).forEach(x=>x.hidePage());
}