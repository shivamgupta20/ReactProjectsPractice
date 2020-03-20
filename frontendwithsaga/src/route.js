import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Login } from './components/login/login';

export const Routes = props => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
            </Router>
        </div>
    )
}