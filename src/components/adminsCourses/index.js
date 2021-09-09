import React from 'react'
import AdminsTable from './adminsTable'
import './adminstable.scss'
function Admin(props) {




    return (
        <div>
            <h2>Welcome to the admins panel, here you can add courses or edit them the way you like</h2>
            <AdminsTable courses = {props.courses} getdata={props.getdata}/>
        </div>
    )
}

export default Admin
