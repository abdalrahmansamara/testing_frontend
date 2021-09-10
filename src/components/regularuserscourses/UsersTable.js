import './UsersTable.scss'
import {If, Else, Then} from 'react-if'
import { withRouter } from 'react-router';




function UsersTable(props) {


  // const sendToDetailsPage = (e) => {
  //   e.preventDefault()
  //   let id = e.target.id.value
  //   window.location.href = `/courses/${id}`;
  // }


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
              </tr>
            </thead>


            <tbody className="bg-gray-200">
              {
                props.courses.map(course => {
                    return (
                      <tr className="bg-white border-b-2 border-gray-200">

                        <td>
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

export default withRouter (UsersTable)
