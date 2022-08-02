import React from 'react';

import './Layout.css';
import {Outlet} from "react-router-dom";
import {Header} from "../../components";

const Layout = () => {
    return (
        <>
            <Header/>
            <main className={'main'}>
                <Outlet/>
            </main>
        </>
    );
};

export {Layout};