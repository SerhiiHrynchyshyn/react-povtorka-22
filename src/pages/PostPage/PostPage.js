import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import './PostPage.css';
import {postService} from "../../services/post.service/post.service";
import {Post} from "../../components";

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    },[])

    return (
        <>
            <div className={'container__posts'}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export {PostPage};