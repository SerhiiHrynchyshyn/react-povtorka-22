import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service/post.service";
import {useParams} from "react-router-dom";

const PostCommentsPage = () => {
    const [comments, setComments] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        postService.getPostComments(id).then(value => setComments(value))
    }, [id])

    return (
        <div>
            {comments.map(comment =>
                <div key={comment.id}>
                    <p>{comment.postId}</p>
                    <p>{comment.id}</p>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            )}
        </div>
    );
};

export {PostCommentsPage};