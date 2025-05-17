import {get,post} from "./requester.js";
import * as endPoints from './endPoints.js';


function getAllMovie() {
    
    return get(endPoints.movies);
}

function createMovie(title, description, imgUrl) {
    return post(endPoints.movies,{title,description,imgUrl})
}


export default {
    getAllMovie,
    createMovie
}