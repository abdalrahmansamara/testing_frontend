import React from 'react'
import cookie from 'react-cookies';
import axios from 'axios';
import toast from 'react-hot-toast';


import './adminaddform.scss'
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './extraformcss.scss'

function AdminAddForm(props) {

    async function submitHandler(e){
      try {
        e.preventDefault()
        let newCourse = {
            name: e.target.name.value,
            price: e.target.price.value,
            description: e.target.description.value,
            lecturer: e.target.lecturer.value,
            online: e.target.online.checked
        }
      let token = cookie.load('auth');
      const config = { headers: { Authorization: "Bearer " + token } };
      let addLink = `https://talkversity-apitesting.herokuapp.com/api/v1/courses/`
      await axios.post(addLink,newCourse, config)
      toast.success('Posted successfully')
      props.getdata() 
      } catch (error) {
        toast.error('Authentication or Server Error')
      }
    }

    return (
        <div className='formcss'>
            <div className="container m-auto justify-center items-center">
        <div className="card flex back">
          <div className="card-image">	
            <h2 className="card-heading ">
               <span className='text-gray-700'> Add a Course </span>
              <small className='text-gray-700 font-bold'>Add your Course in the form below</small>
            </h2>
          </div>
          <form className="card-form back" onSubmit = {submitHandler}>
            <div className="input">
              <input type="text" className="input-field" name='name' required />
              <label className="input-label"><strong>Course name</strong></label>
            </div>
            <div className="input">
              <input type="number" className="input-field" name = 'price' required />
              <label className="input-label"><strong>Course Price</strong></label>
            </div>
            <div className="input">
              <input type="text" className="input-field" name='description' required />
              <label className="input-label"><strong>Description</strong></label>
            </div>
            
            <div className='extra'>
              
              <div className='mt-10'>
            <label htmlFor="job">Lecturer</label>
        <select id="job" name="user_job" name='lecturer'>
            <option value="Ahmad">Ahmad</option>
            <option value="Mohammad">Mohammad</option>
            <option value="Waleed">Waleed</option>
            <option value="Anan">Anan</option>
            <option value="Abdallah">Abdallah</option>
            <option value="Khaled">Khaled</option>
            <option value="Osama">Osama</option>
        </select>
        </div>




    <input class="styled-checkbox" id="styled-checkbox-1" name='online' type="checkbox" value="value1" />
    <label for="styled-checkbox-1">Online</label>



            </div>
            

            <div className="action">
              <button className="action-button">Add the Course</button>
            </div>
          </form>
          <div className="card-info">
            <p>Good Luck</p>
          </div>
        </div>
      </div>

        </div>
    )
}

export default AdminAddForm
