import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Login } from './components/login/login';
import { Movies } from './components/movies/movies';
import { Home } from './components/home/home'
import { AdminSideNav } from './components/common/adminSideNav'
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { User } from './components/user/user'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
            color: 'white'

        },
    },
}));

export const Routes = props => {
    const userData = useSelector(state => state.authReducer);
    let isAuthenticated = userData.authenticated
    const classes = useStyles();
    return (
        <div>
            <Router>
                <AppBar position="static">
                    <Typography className={classes.root}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/movies">Movies</NavLink>
                        {
                            userData.userData && userData.userData.data.profile.role === "ADMIN" &&
                            <>
                                <NavLink to="/users">Users</NavLink>
                                <NavLink to="/admin"> Admin </NavLink>
                            </>
                        }
                        {
                            !isAuthenticated ?
                                <NavLink to="/login">Login</NavLink>
                                :
                                <NavLink to="/logout">Logout</NavLink>
                        }
                    </Typography>
                </AppBar >
                {/* {isAuthenticated ? */}
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/login" component={Login} />
                    <Route path="/users" component={User} />
                    <Route exact path="/admin" component={AdminSideNav} />
                    <Route path="/admin/:contactid" component={Home} />
                    <Route path="/admin/:movieid" component={Home} />

                </div>
                {/* :
                    <Route path="/" component={Login} /> */}
                }
            </Router>
        </div>
    )
} 