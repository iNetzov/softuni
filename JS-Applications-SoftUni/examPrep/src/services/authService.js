import * as api from './api.js';
import * as request from './requester.js';

export const login = (username, password) => {
    return request.post(api.login, { username, password })
        .then(user => {
            saveUser(user);
            return user;
        })
};

export const register = (username, password) => {
    return request.post(api.register,{username, password})
        .then(user => {
            saveUser(user)
            return user;
        });
}

function saveUser(data) {
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUser() {

    try {
        let user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
    } catch (error) {
    return undefined;
        
    }
    
}

export const logout = () => {
   return request.get(api.logout).finally(destroySession);
}

function destroySession(){
    localStorage.removeItem('user');
}

