import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Home from '../home'
import Events from '../events'
import Courses from '../courses'
import Pages from '../pages'
import SignIn from '../signin'
import SignUp from '../signup'
import BuddyPress from '../Buddypress'
import Shop from '../Shop'
import Portfolio from '../Portfolio'
import Blog from '../Blog'
import BbPress from '../bbPress'
import SingleRender from '../singleRender'


import './main.scss'

function Main() {
    return (
        <main className='main'>
            <Switch>
                <Route exact path='/' component = {Home}/>
                <Route path='/events' component = {Events}/>
                <Route exact path='/courses' component = {Courses}/>
                <Route path='/pages' component = {Pages}/>
                <Route path='/signin' component = {SignIn}/>
                <Route path='/signup' component = {SignUp}/>
                <Route path='/BuddyPress' component = {BuddyPress}/>
                <Route path='/Shop' component = {Shop}/>
                <Route path='/Portfolio' component = {Portfolio}/>
                <Route path='/Blog' component = {Blog}/>
                <Route path='/bbpress' component = {BbPress}/>
                <Route path='/courses/:id' component = {SingleRender}/>

                <Route>
                    <div>
                        404 man
                    </div>
                </Route>
            </Switch>
        </main>
    )
}

export default Main
