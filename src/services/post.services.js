import {urls} from "../config/urls";

const getPostId = (id) => {
  return fetch(`${urls.posts}?user=id=${id}`)
      .then(value => value.json())
}

export const postServices = {
    getPostId
}