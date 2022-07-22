import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.services";
import {User} from "../User/User";

const Users = ({getUser}) => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    },[])

    return (
        <div>
            {users.map(value => <User key={value.id} user={value} getUser={getUser}/>)}
        </div>
    );
};

export {Users};