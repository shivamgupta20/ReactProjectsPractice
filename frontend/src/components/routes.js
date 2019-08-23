import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './login';
import Home from './Home';
import Logout from './logout';
import Deposits from './deposits';
import createDeposit from './createDeposit';
import Users from './users';
import Google from './google';
import DepositForm from './depositForm';
import EditDeposit from './editDeposit';
import './Layouts/layouts.css'
import { connect } from 'react-redux';

class Routes extends React.Component {
    render() {
        let isAuthenticated = true;
        if (this.props.auth.authenticated === false)
            isAuthenticated = false;
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navlink-class" to="/">Home</NavLink>
                        <NavLink className="navlink-class" to="/google">Google</NavLink>
                        <NavLink className="navlink-class" to="/deposits">Deposits</NavLink>
                        <NavLink className="navlink-class" to="/users">Users</NavLink>
                        {
                            !isAuthenticated ?
                                <NavLink className="navlink-class" to="/login">Login</NavLink>
                                :
                                <NavLink className="navlink-class" to="/logout">Logout</NavLink>
                        }
                    </nav>
                    {isAuthenticated ?
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/google" component={Google} />
                            <Route path="/createdeposit" component={createDeposit} />
                            <Route path="/deposits" component={Deposits} />
                            <Route path="/users" component={Users} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/deposit/:depositid" component={EditDeposit} />
                        </div>
                        :
                        <div>
                            <Route exact path="/" component={Login} />
                            <Route path="/login" component={Login} />
                            <Route path="/google" component={Login} />
                            <Route path="/createdeposit" component={Login} />
                            <Route path="/deposits" component={Login} />
                            <Route path="/users" component={Login} />
                            <Route path="/deposit/:depositid" component={Login} />
                        </div>
                    }

                </Router>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(Routes);