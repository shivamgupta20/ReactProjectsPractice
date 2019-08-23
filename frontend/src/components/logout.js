import React from 'react';
import { connect } from 'react-redux';
import { authLogout } from './store/actions/authActions';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.props.authLogout();
    }
    render() {
        return <h1> Logging out... </h1>
    }
}

export default connect(null, { authLogout })(Logout);