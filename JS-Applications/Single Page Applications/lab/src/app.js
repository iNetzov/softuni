
import {isAuthenticated} from './auth.js';

import loginPage from './loginPage.js';
import registerPage from './registerPage.js';
import moviesPage from './moviesPage.js';
import navigation from './navigation.js';



let headerElement = document.querySelector('.header .nav');
let pages = {
    register: registerPage,
    login: loginPage,
    movies: moviesPage,
};

navigation.updateNavigation();
//refreshing on page if you are registedd
if (isAuthenticated()){
    moviesPage.showPage();
}
//refreshing on page if you are registedd

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