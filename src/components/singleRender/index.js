// import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import cookie from 'react-cookies'
import axios from 'axios'
// import { LoaderIcon } from 'react-hot-toast'
import toast from 'react-hot-toast';
import { CircularProgress } from '@material-ui/core'
import {If, Else, Then} from 'react-if'
import './single.scss'

// function SingleRender(props) {
    // const [course,setCourse] = useState({})
    // const [loading,setLoading] = useState(true)

    // useEffect(()=>{
    //     let id = props.match.params.id
    //     getData(id)
    // },[props.match.params.id])


    // const getData = async (id) => {
    //     try {
    //         let token = cookie.load('auth');
    //         const config = { headers: { Authorization: "Bearer " + token } };
    //         let getLink = `https://talkversity-apitesting.herokuapp.com/api/v1/courses/${id.toString()}`
    //         let data = await axios.get(getLink, config)
    //         setCourse(data.data)
    //         setLoading(false)
            
    //     } catch (error) {
    //         toast.error(`Either you're not logged in, or the id doesn't exist`)
    //         toast.error(`Redirecting in 5 seconds`)
    //         setTimeout(() => {

    //             window.location.href = `/`;
          
    //         }, 5000);
    //     }
    // }

//     if(loading)return(<CircularProgress/>)
//     return (
//         <div className='wid'>
//             <h3>
//                 Class Name: {course.name}
//             </h3>
//             <h3>
//                 Description: {course.description}
//             </h3>
//             <h3>
//                 Class Lecturer: {course.lecturer}
//             </h3>
//             <h3>
//                 Price: {course.price}
//             </h3>
//             <If condition={course.online}>
//                 <Then>
//                     <h3>
//                         Online: Yes
//                     </h3>
//                 </Then>
//                 <Else>
//                     <h3>
//                         Online: No
//                     </h3>
//                 </Else>
//             </If>

//         </div>
//     )
// }

// export default SingleRender

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [course,setCourse] = useState({})
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
      let id = props.match.params.id
      getData(id)
  },[props.match.params.id])


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
    <Card className='cards'>
      <CardContent>
        <Typography>
        Class Name: {course.name}
        </Typography>


        <Typography variant="h5" component="h2">
        <If condition={course.online}>
            <Then>
                Online
            </Then>
            <Else>
                Physical
            </Else>
        </If>
        </Typography>
        
        <Typography className={classes.pos} color="success.main">
            Class Lecturer: {course.lecturer}
        </Typography>
        <Typography variant="p" component="h4">
        Description: {course.description}
        </Typography>
        <br />
        <Typography variant="p" component="h4">
        Price: {course.price}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
