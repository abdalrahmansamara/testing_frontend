import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'
import "./header.scss";
import { SettingsContext } from '../../context/auth';
import { useContext } from 'react';

function Header() {

  const context = useContext(SettingsContext);
  
  function logouthandler(e){
    e.preventDefault();
    context.logout()
    
  //   setTimeout(() => {

  //     window.location.href = `/`;

  // }, 500);
    
  }

  if (context.loggedIn){
    return (
      <div className="header">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className='right'>
            <Link exact to='/' className='link'>
                <h2>Home</h2>
                <p>All Variations</p>
            </Link>
            <Link to='/events' className='link'>
                <h2>Events</h2>
                <p>Our Activities</p>
            </Link>
            <Link to='/courses' className='link'>
                <h2>Courses</h2>
                <p>Research & Study</p>
            </Link>
            <Link to='/pages' className='link'>
                <h2>Pages</h2>
                <p>Designed Pages</p>
            </Link>
            <div className='link' onClick={logouthandler} style={{cursor:"pointer"}}>
            <h2>Logout</h2>
                <p>Bye</p>
            </div>
        </div>

        <div className="right_ham">
          <div className="nav">
            <label htmlFor="menu-control" className="hamburger">
              <i className="hamburger__icon" />
              <i className="hamburger__icon" />
              <i className="hamburger__icon" />
            </label>
            <input type="checkbox" id="menu-control" className="menu-control" />
            <aside className="sidebar">
              <nav className="sidebar__menu">
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/pages">Pages</Link>
                <div className='link' onClick={logouthandler} style={{cursor:"pointer"}}>Logout</div>
                
              </nav>
              <label htmlFor="menu-control" className="sidebar__close" />
            </aside>
          </div>
        </div>
      </div>
    );}
    else{
  return (
    <div className="header">
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <div className='right'>
          <Link exact to='/' className='link'>
              <h2>Home</h2>
              <p>All Variations</p>
          </Link>
          <Link to='/events' className='link'>
              <h2>Events</h2>
              <p>Our Activities</p>
          </Link>
          <Link to='/courses' className='link'>
              <h2>Courses</h2>
              <p>Research & Study</p>
          </Link>
          <Link to='/pages' className='link'>
              <h2>Pages</h2>
              <p>Designed Pages</p>
          </Link>
          <Link to='/signin' className='link'>
              <h2>Login</h2>
              <p>welcome back</p>
          </Link>
          <Link to='/signup' className='link'>
              <h2>Sign Up</h2>
              <p>new Experience</p>
          </Link>
      </div>
      <div className="right_ham">
        <div className="nav">
          <label htmlFor="menu-control" className="hamburger">
            <i className="hamburger__icon" />
            <i className="hamburger__icon" />
            <i className="hamburger__icon" />
          </label>
          <input type="checkbox" id="menu-control" className="menu-control" />
          <aside className="sidebar">
            <nav className="sidebar__menu">
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/pages">Pages</Link>
              <Link to='/signin'>
                  Login
              </Link>
              <Link to='/signup'>
                  Sign Up
              </Link>
            </nav>
            <label htmlFor="menu-control" className="sidebar__close" />
          </aside>
        </div>
      </div>
    </div>
  );
}
    }
    
//   return (
//     <div className="header">
//       <a href="/">
//         <img src={logo} alt="" />
//       </a>
//       <div className='right'>
//           <Link exact to='/' className='link'>
//               <h2>Home</h2>
//               <p>All Variations</p>
//           </Link>
//           <Link to='/events' className='link'>
//               <h2>Events</h2>
//               <p>Our Activities</p>
//           </Link>
//           <Link to='/courses' className='link'>
//               <h2>Courses</h2>
//               <p>Research & Study</p>
//           </Link>
//           <Link to='/pages' className='link'>
//               <h2>Pages</h2>
//               <p>Designed Pages</p>
//           </Link>
//           <Link to='/login' className='link'>
//               <h2>Login</h2>
//               <p>welcome back</p>
//           </Link>
//           <Link className='link'>
//               <h2>Sign Up</h2>
//               <p>new Experience</p>
//           </Link>
//       </div>
//       <div className="right_ham">
//         <div className="nav">
//           <label htmlFor="menu-control" className="hamburger">
//             <i className="hamburger__icon" />
//             <i className="hamburger__icon" />
//             <i className="hamburger__icon" />
//           </label>
//           <input type="checkbox" id="menu-control" className="menu-control" />
//           <aside className="sidebar">
//             <nav className="sidebar__menu">
//               <Link to="/">Home</Link>
//               <Link to="/events">Events</Link>
//               <Link to="/courses">Courses</Link>
//               <Link to="/pages">Pages</Link>
//               <Link to='/login'>
//                   Login
//               </Link>
//               <Link to='/signup'>
//                   Sign Up
//               </Link>
//             </nav>
//             <label htmlFor="menu-control" className="sidebar__close" />
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Header;
