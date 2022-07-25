import {urls} from "../config/urls";

const getPostId = (id) => {
    return fetch(`${urls.posts}?userId=${id}`).then(value => value.json())
}

export const postService  = {
    getPostId
}