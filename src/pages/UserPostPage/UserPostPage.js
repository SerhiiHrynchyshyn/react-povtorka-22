import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service/user.service";
import {useParams} from "react-router-dom";

const UserPostPage = () => {
    const [posts, setPosts] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        userService.getUserPost(id).then(value => setPosts(value))
    },[id])

    return (
        <div>
            {posts.map(post =>
                <div key={post.id}>
                    <p>{post.userId}</p>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export {UserPostPage};