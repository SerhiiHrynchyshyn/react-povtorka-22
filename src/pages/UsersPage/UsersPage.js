import React, {useEffect, useState} from 'react';

import './UsersPage.css';
import {userService} from "../../services/user.service/user.service";
import {Outlet} from "react-router-dom";
import {User} from "../../components";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, [])

    return (
        <>
            <div className={'container__users'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </>
    );
};

export {UsersPage};