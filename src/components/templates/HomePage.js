import React from 'react'
import Header from '../Header';
import { Outlet } from 'react-router';

export default () => {
    return (
        <>
            <Header/>
            <div className="body"><Outlet/></div>
        </>
    )
}