import React, {useEffect, useState} from 'react';
import {postServices} from "../../services/post.services";
import {Post} from "../Post/Post";

const Posts = ({postId}) => {
    let [post, setPost] = useState([]);

    useEffect(() => {
        postServices.getPostId(postId)
            .then(value => setPost(value))
    }, [postId])

    return (
        <div>
            {post.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export {Posts};