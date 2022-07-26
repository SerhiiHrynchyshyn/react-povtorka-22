import React from 'react';

import './User.css';

const User = ({user}) => {
    return (
        <div className={'bord'}>
            {user.name} {user.username} {user.email}
        </div>
    );
};

export {User};