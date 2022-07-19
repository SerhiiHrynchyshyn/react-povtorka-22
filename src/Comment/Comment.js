import React from 'react';

const Comment = ({comment}) => {
    let {postId, id, name, email, body} = comment;
    return (
        <div>
            postId - {postId}
            id - {id}
            name - {name}
            email - {email}
            body - {body}
        </div>
    );
};

export {Comment};