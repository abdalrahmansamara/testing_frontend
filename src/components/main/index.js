import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Home from '../home'
import Events from '../events'
import Courses from '../courses'
import Pages from '../pages'
import SignIn from '../signin'
import SignUp from '../signup'

import './main.scss'

function Main() {
    return (
        <main className='main'>
            <Switch>
                <Route exact path='/' component = {Home}/>
                <Route path='/events' component = {Events}/>
                <Route path='/courses' component = {Courses}/>
                <Route path='/pages' component = {Pages}/>
                <Route path='/signin' component = {SignIn}/>
                <Route path='/signup' component = {SignUp}/>
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
