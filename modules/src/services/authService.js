import * as request from '../services/requester.js';
import * as api from '../services/api.js';

function saveData({_id,email,accessToken}){
    localStorage.setItem('id',_id);
    localStorage.setItem('email',email);
    localStorage.setItem('accessToken',accessToken);

}
export function login(email, password) {
    return request.post(api.login,{email,password})
        .then(data => { saveData(data); })
}