import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router';
import { IoArrowBackCircle } from "react-icons/io5";



export default function SinglePage () {
    
    const handleReturn = () => {
        navigate(-1);
    }
    
    const navigate = useNavigate();

    return (
        <>
            <IoArrowBackCircle onClick={handleReturn} className='return_to' size={40}/>
            <Outlet />
        </>
    )
    
}