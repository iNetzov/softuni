import * as api from'../services/api.js';
import * as request from '../services/requester.js';


export const getAll= () =>{
    return request.get(`${api.cars}?sortBy=_createdOn%20desc`)
}

export const create = (car) =>{return request.post(api.cars,car)}

export const getOne = (id) => {return request.get(`${api.cars}/${id}`)};