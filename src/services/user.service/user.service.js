import {axiosService} from "../axios.service/axois.service";
import {urls} from "../../config/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getUserId: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUserPost: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}   