import React from 'react';
import { connect } from 'react-redux';
import { authLogout } from './store/actions/authActions';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.props.authLogout();
    }
    render() {
        return <h1>  Logging out... <Redirect to='/' /></h1>
    }
}

export default connect(null, { authLogout })(Logout);