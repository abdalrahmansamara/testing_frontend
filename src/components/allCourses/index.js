import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import cookie from 'react-cookies';
import axios from 'axios';
import CircularProgress from '../loader'
import Admin from '../adminsCourses';
import Regular from '../regularuserscourses';
import { useContext } from 'react';
import { SettingsContext } from '../../context/auth';


function AllCourses() {
    const [courses,setCourses] = useState([])
    const [loaded,setLoaded] = useState(false)
    const context = useContext(SettingsContext);

    // console.log(context.user.is_staff)

    const getData = async ()=>{
        const token = cookie.load('auth');
        const config = { headers: { Authorization: 'Bearer ' + token} };
        const data = await axios.get('https://talkversity-apitesting.herokuapp.com/api/v1/courses/',config)
        let a = data.data
        setCourses(a)
        setLoaded(true)
    }
    useEffect( () => {
        getData()
     },[]);
    
    
    if(!loaded) return(<>
    <CircularProgress/>
    </>)
    if(context.user[0].is_staff) return (
        <div>
            <Admin courses={courses} getdata={getData}/>
        </div>
    )
    return (
        <div>
            <Regular courses={courses}/>
        </div>
    )
}

export default AllCourses
