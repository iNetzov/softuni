import * as authService from '../services/authService.js'

function request(method, url, data) {
    let options = {};
    //geting accesstoken from tkoen destroctor
    let user = authService.getUser();



    if (method != 'GET') {
        options = {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    }
    if (user) {
        options.headers = {
            ...(options.headers),
            'X-Authorization': user.accessToken
        }
    }
    return fetch(url, options)
        .then(ress =>{ 
            if(ress.url.endsWith('logout')){
                return ress;
            }
            return ress.json()
        });
}
export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');