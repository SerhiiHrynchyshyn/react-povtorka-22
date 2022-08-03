import {axiosService} from "../axios.service/axois.service";
import {urls} from "../../config/urls";

export const albumsService  = {
    getAlbums: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getAlbumsPhotos: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}