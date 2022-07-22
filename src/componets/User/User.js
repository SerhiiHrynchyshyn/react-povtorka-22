import React from 'react';

const User = ({user, getUser}) => {
    const {id, name, email} = user
    return (
        <div>
            {id} - {name} - {email}
            <button onClick={() => {getUser(user)}}>userDetails</button>
        </div>
    );
};

export {User};