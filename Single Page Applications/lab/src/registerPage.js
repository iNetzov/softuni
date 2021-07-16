import {saveToken} from './auth.js';
import moviesPage from './moviesPage.js';


let registerSection = document.querySelector('.register');
let registerForm = document.querySelector('#register-form');
let baseUrl = 'http://localhost:3030';


registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password')
        })
    })
        .then(res => res.json())
        .then(responceData => {
            console.log(responceData);
            saveToken(responceData.accessToken);
            hidePage();
            moviesPage.showPage();


        });
})


function showPage() {
    registerSection.classList.remove('hidden');
}
function hidePage() {
    registerSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
}
