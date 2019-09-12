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
import EditDeposit from './editDeposit';
import './Layouts/layouts.css'
import { connect } from 'react-redux';
import Movies from './movies';
import createMovies from './createMovies';
import ListMovies from './listmovies';
import EditMovie from './editmovies';
import { updStore } from './store/actions/authActions';

class Routes extends React.Component {
    render() {
        let isAuthenticated = true;
        // if (this.props.auth.authenticated === false)
        //     this.props.updStore();
        if (this.props.auth.authenticated === false)
            isAuthenticated = false;
        else
            isAuthenticated = true;
        // debugger;
        // if (this.props.auth.userData)
        //     console.log(this.props.auth.userData.data.role);
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-9lg navbar-light bg-light">
                        <NavLink className="navlink-class" to="/">Home</NavLink>
                        <NavLink className="navlink-class" to="/google">Google</NavLink>
                        <NavLink className="navlink-class" to="/deposits">Deposits</NavLink>
                        <NavLink className="navlink-class" to="/users">Users</NavLink>
                        <NavLink className="navlink-class" to="/movies">Movies</NavLink>
                        {
                            !isAuthenticated ?
                                <NavLink className="navlink-class" to="/login">Login</NavLink>
                                :
                                <NavLink className="navlink-class" to="/logout">Logout</NavLink>
                        }
                        {
                            this.props.auth.userData &&
                            <>
                                <NavLink className="navlink-class" to="/admin/movies">Admin Movies</NavLink>
                            </>
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
                            <Route path="/movies" component={Movies} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/deposit/:depositid" component={EditDeposit} />
                            <Route path="/admin/createmovies" component={createMovies} />
                            <Route path="/admin/movies" component={ListMovies} />
                            <Route path="/admin/editmovies/:movieid" component={EditMovie}></Route>
                        </div>
                        :
                        <div>
                            <Route path="/" component={Login} />
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
export default connect(mapStateToProps, { updStore })(Routes);