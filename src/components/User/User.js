import React from 'react';

const User = ({user, getUser}) => {
    return (
        <div>
            <span>{user.name} {user.username}</span>
            <button onClick={() => {getUser(user)}}>userDetails</button>
        </div>
    );
};

export {User};