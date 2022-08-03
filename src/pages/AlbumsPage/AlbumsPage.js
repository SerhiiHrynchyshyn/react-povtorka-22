import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import './AlbumsPage.css';
import {albumsService} from "../../services/albums.service/albums.service";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        albumsService.getAlbums(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <div className={'AlbumsPage'}>
            {albums.map(value =>
                <div key={value.id}>
                    <div>id: {value.id}</div>
                    <div>userId: {value.userId}</div>
                    <div>title: {value.title}</div>
                    <Link to={value.id.toString() + '/photos'} state={value}>
                        <button>Photos</button>
                    </Link>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};