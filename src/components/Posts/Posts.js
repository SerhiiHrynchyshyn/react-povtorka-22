import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {Post} from "../Post/Post";

const Posts = ({post}) => {
    let [posts, setPosts] = useState([]);


    useEffect(() => {
        postService.getPostId(post).then(value => setPosts(value))
    },[post])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};