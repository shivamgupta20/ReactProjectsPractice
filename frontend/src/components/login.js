import React from 'react';
import { Button, Form, FormGroup, Tabs, Tab } from 'react-bootstrap';
import './Layouts/Login.css';
import { authLogin, usrRegister } from './store/actions/authActions';
import { getUsers } from './store/actions/userAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SocialLogin from './socialLogin';
// import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.userLogin = this.userLogin.bind(this);
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.signup = this.signup.bind(this);
        this.state = { username: "", password: "", cpassword: "", email: "" }
    }

    userLogin() {
        const username = this.state.username
        const password = this.state.password
        this.props.authLogin(username, password);
    }

    fieldUpdate(e) {
        const fname = e.target.name
        const fval = e.target.value
        this.setState({
            ...this.state,
            [fname]: fval
        });
    }

    signup() {
        const email = this.state.email
        const password = this.state.password
        const cpassword = this.state.cpassword
        const data = { "email": email, "password": password, "cpassword": cpassword }
        this.props.usrRegister(data);

    }

    render() {
        // let isAdmin = this.props.auth
        // console.log(this.props.auth)
        // console.log(this.props.auth.userReg.status == 200);
        if (this.props.auth.userReg.status) {
            return <h3> An email has been sent to your mail address. Please click on the link in the email to confirm your registeration</h3>

        }
        if (this.props.auth.authenticated === true) {
            let isAdmin = this.props.auth.authenticated
            if (isAdmin)
                this.props.getUsers();
            return <Redirect to='/home' />
        }

        else {
            // console.log("this.props.auth=", this.props.auth);
            return (
                <form className="login-form">
                    <h1>
                        <span className="font-weight-bold">Saving Deposit</span></h1>
                    <h2 className="text-center"> Welcome </h2><br />
                    <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example">
                        <Tab eventKey="Login" title="Login" className="tabs-stretch">
                            <FormGroup>
                                <Form.Label>Login</Form.Label><br />
                                <Form.Control type="text" name="username" placeholder="Username" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Password</Form.Label><br />
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <Button className="btn-lg btn-dark btn-block" onClick={this.userLogin}> login </Button>
                            <br />
                            <SocialLogin />
                        </Tab>
                        <Tab eventKey="Register" title="Register" className="tabs-stretch">

                            <FormGroup>
                                <Form.Label>Email</Form.Label><br />
                                <Form.Control type="email" name="email" placeholder="Email Address" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Password</Form.Label><br />
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Confirm Password</Form.Label><br />
                                <Form.Control type="password" name="cpassword" placeholder="Confirm Password" onChange={this.fieldUpdate} />
                            </FormGroup>
                            <Button className="btn-lg btn-dark btn-block" onClick={this.signup}> Register </Button>
                        </Tab>
                    </Tabs>

                </form>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    users: state.user
})
export default connect(mapStateToProps, { authLogin, usrRegister, getUsers })(Login);
