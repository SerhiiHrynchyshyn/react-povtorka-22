import React from 'react';

import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
        </nav>
    );
};

export {Header};