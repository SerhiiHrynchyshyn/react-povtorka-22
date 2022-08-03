import React from 'react';

import './User.css'
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username} = user

    return (
        <div>
            {name} {username}
            <Link to={id.toString()} state={{...user}}><button>UserDetails</button></Link>
            <Link to={id.toString() + '/albums'} state={{...user}}><button>User album</button></Link>
        </div>
    );
};

export {User};