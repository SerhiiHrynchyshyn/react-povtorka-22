import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import './UserDetailsPage.css'
import {userService} from "../../services/user.service/user.service";

const UserDetailsPage = () => {

    const [user, setUser] = useState(null);

    const {state: userDetails} = useLocation();
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        if (userDetails) {
            setUser(userDetails)
        }
        userService.getUserId(id).then(value => setUser(value))
    }, [id, userDetails])

    return (
        <div className={'UserDetailsPage'}>
            {user &&
            <div className={'DetailsPage'}>
                <ul>
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <ul>
                        <li>{user.address.street}</li>
                        <li>{user.address.suite}</li>
                        <li>{user.address.city}</li>
                        <li>{user.address.zipcode}</li>
                        <ul>
                            <li>{user.address.geo.lat}</li>
                            <li>{user.address.geo.lng}</li>
                        </ul>
                    </ul>
                    <li>{user.phone}</li>
                    <li>{user.website}</li>
                    <ul>
                        <li>{user.company.name}</li>
                        <li>{user.company.catchPhrase}</li>
                        <li>{user.company.bs}</li>
                    </ul>
                </ul>
                <Link to={'posts'}><button>Get Posts</button></Link>
            </div>
            }
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserDetailsPage};