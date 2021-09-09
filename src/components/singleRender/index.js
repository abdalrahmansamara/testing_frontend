import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import cookie from 'react-cookies'
import axios from 'axios'
// import { LoaderIcon } from 'react-hot-toast'
import toast from 'react-hot-toast';
import { CircularProgress } from '@material-ui/core'
import {If, Else, Then} from 'react-if'

function SingleRender(props) {
    const [course,setCourse] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        let id = props.match.params.id
        getData(id)
    },[])


    const getData = async (id) => {
        try {
            let token = cookie.load('auth');
            const config = { headers: { Authorization: "Bearer " + token } };
            let getLink = `https://talkversity-apitesting.herokuapp.com/api/v1/courses/${id.toString()}`
            let data = await axios.get(getLink, config)
            setCourse(data.data)
            setLoading(false)
            
        } catch (error) {
            toast.error(`Either you're not logged in, or the id doesn't exist`)
            toast.error(`Redirecting in 5 seconds`)
            setTimeout(() => {

                window.location.href = `/`;
          
            }, 5000);
        }
    }

    if(loading)return(<CircularProgress/>)
    return (
        <div className='wid'>
            <h3>
                Class Name: {course.name}
            </h3>
            <h3>
                Description: {course.description}
            </h3>
            <h3>
                Class Lecturer: {course.lecturer}
            </h3>
            <h3>
                Price: {course.price}
            </h3>
            <If condition={course.online}>
                <Then>
                    <h3>
                        Online: Yes
                    </h3>
                </Then>
                <Else>
                    <h3>
                        Online: No
                    </h3>
                </Else>
            </If>

        </div>
    )
}

export default SingleRender
