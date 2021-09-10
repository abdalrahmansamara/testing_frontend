import React from 'react'
import AllCourses from '../allCourses'
import { useContext } from 'react';
import { SettingsContext } from '../../context/auth';



function Courses() {
    const context = useContext(SettingsContext);

    
    if(context.loggedIn)return (
        <div>
            <AllCourses />
        </div>
    )
    
    return(
        <div className='temp'>
            Please Login to see what's inside this page
        </div>
    )
}

export default Courses
