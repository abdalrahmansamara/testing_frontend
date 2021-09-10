import React from 'react'
import AdminsTable from './adminsTable'
import AdminAddForm from './adminAddForm'
import './adminstable.scss'
// import Forms from './form/form'
function Admin(props) {




    return (
        <div>
            <h2>Welcome to the admins panel, here you can add courses or edit them the way you like</h2>
            <AdminsTable courses = {props.courses} getdata={props.getdata}/>
            <AdminAddForm getdata={props.getdata}/>
            {/* <Forms/> */}
        </div>
    )
}

export default Admin
