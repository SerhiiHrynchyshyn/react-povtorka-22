import React from 'react';

const Post = ({post:{userId, id, title, body}}) => {
    
    return (
        <div>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export {Post};