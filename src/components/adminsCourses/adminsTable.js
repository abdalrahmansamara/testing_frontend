
import axios from 'axios';
import cookie from 'react-cookies';
import './adminstable.scss'
import {If, Else, Then} from 'react-if'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


function AdminsTable(props) {
  console.log(props)




  const handleDelete = async (e) => {
    e.preventDefault()
    let token = cookie.load('auth');
    let id = e.target.courseid.value
    const config = { headers: { Authorization: "Bearer " + token } };
    let deleteLink = `https://talkversity-apitesting.herokuapp.com/api/v1/courses/${id.toString()}`
    await axios.delete(deleteLink, config)
    props.getdata()
  }

  const sendToDetailsPage = (e) => {
    e.preventDefault()
    let id = e.target.id.value
    window.location.href = `/courses/${id}`;
    // props.history = []
    // props.history.push(`/courses/${id}`)
    
  }


  return (
    <div className="allmyfarm">
      <div className='m-auto myfarms' style={{margin:'auto'}}>
        <div>
          <table className=" mx-auto table-auto fontso ">
            <thead className="justify-between ">
              <tr className="bg-gray-500">

                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">Course Name</span>
                </th>
                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">Lecturer</span>
                </th>

                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">Price (JD)</span>
                </th>

                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">Online</span>
                </th>

                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">Delete</span>
                </th>
              </tr>
            </thead>


            <tbody className="bg-gray-200">
              {
                props.courses.map(course => {
                    return (
                      <tr className="bg-white border-b-2 border-gray-200">

                        <td>
                          <Link></Link>
                        <button onClick={()=>{ props.history.push(`/courses/${course.id}`); }} >{course.name}</button>
                          {/* <form className='text-center' onSubmit={sendToDetailsPage}>
                            <input type="hidden" name='id' value={course.id} />
                            <button>
                              <span className="ml-2 font-semibold text-center text-blue-700">{course.name}</span>
                            </button>
                          </form> */}
                        </td>

                        <td className="px-16 py-2">
                          <span>{course.lecturer}</span>
                        </td>
                        <td className="px-16 py-2">
                          <span>{course.price}</span>
                        </td>

                        <td className="px-16 py-2">
                            <If condition={course.online}>
                                <Then>
                                    <span>Yes</span>
                                </Then>
                                <Else>
                                    <span>No</span>
                                </Else>
                            </If>
                        </td>

                        <td className="px-16 py-2">
                          <form onSubmit={handleDelete}>
                            <input type="hidden" value={course.id} name='courseid' />
                            <button>
                              <span className="flex text-yellow-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 text-red-700"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </form>

                        </td>
                      </tr>
                    )
                
                })
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default withRouter(AdminsTable);
