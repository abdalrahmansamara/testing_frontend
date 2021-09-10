import React from 'react'
import UsersTable from './UsersTable'
import './UsersTable.scss'
function Regular(props) {

    // console.log(props.courses[0])


    return (
        <div>
            <h2>Welcome, These are the available classes for now</h2>
            <UsersTable courses = {props.courses}/>
        </div>
    )
}

export default Regular
