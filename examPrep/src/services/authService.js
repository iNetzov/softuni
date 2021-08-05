import * as api from './api.js';
import * as request from './requester.js';

export const login = (username, password) => {
    return request.post(api.login, { username, password })
        .then(user => {
            saveUser(user);
            return user;
        });

    function saveUser(data) {
        localStorage.setItem('user', JSON.stringify(data));
    }
    function getUser() {
        let user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        } else {

            return {};

        }
    }

};
