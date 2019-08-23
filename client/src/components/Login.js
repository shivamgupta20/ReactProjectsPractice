import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Row,
  Grid,
  Col,
  Alert
} from "react-bootstrap";
import { browserHistory } from "react-router";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.onGoogleSuccess = this.onGoogleSuccess.bind(this);
    this.onGoogleFailure = this.onGoogleFailure.bind(this);
    this.initFacebookLogin = this.initFacebookLogin.bind(this);
    this.initGoogleLogin = this.initGoogleLogin.bind(this);
  }

  componentDidMount() {
    this.initFacebookLogin();
    this.initGoogleLogin();
  }

  componentWillReceiveProps(nextProps) {
    const profileState = nextProps.mappedProfileState;
    if (profileState.profile && profileState.profile.role) {
      browserHistory.replace("/");
    }
  }

  initGoogleLogin() {
    if(window.gapi) {
      window.gapi.signin2.render("google-signin2", {
        scope: "email profile openid",
        width: 240,
        height: 50,
        longtitle: true,
        theme: "dark",
        onsuccess: this.onGoogleSuccess,
        onfailure: this.onGoogleFailure
      });  
    } else {
      requestAnimationFrame(this.initGoogleLogin);
    }
  }

  initFacebookLogin() {

    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : '2152071231731773',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.0'
      });

      window.FB.Event.subscribe('auth.statusChange', response => {
        if (response.status === 'connected' && response.authResponse && response.authResponse.accessToken) {
          this.props.mappedSocialLogin({id_token: response.authResponse.accessToken, socialProvider: 'facebook'});
        } else {
          // this.logout
          console.error("onFacebookFailure", "error", response);
        }
      });
    }.bind(this);


    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  onGoogleSuccess(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    this.props.mappedSocialLogin({ id_token, socialProvider: 'google' });
  }
  onGoogleFailure(error) {
    console.error("onGoogleFailure", "error", error);
  }

  login(e) {
    e.preventDefault();
    const form = document.getElementById("logInForm");
    const email = form.email.value;
    const password = form.password.value;
    this.props.mappedLogin({ email, password });
  }
  register(e) {
    e.preventDefault();
    const form = document.getElementById("signUpForm");
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    this.props.mappedRegister({ email, password, cpassword });
  }

  render() {
    const profileState = this.props.mappedProfileState;
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <h3>Login</h3>
              <form
                className="form form-horizontal"
                id="logInForm"
                onSubmit={this.login}
              >
                <FormGroup controlId="formHorizontalLoginEmail">
                  <Col componentClass={ControlLabel} sm={3}>
                    Email
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalLoginPassword">
                  <Col componentClass={ControlLabel} sm={3}>
                    Password
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={3} sm={9}>
                    <Button type="submit" id="formHorizontalLoginSubmit" bsStyle="info" bsSize="small">
                      {`${profileState.isLoggingIn ? "Signing In..." : "Sign In"}`}
                    </Button>
                  </Col>
                </FormGroup>

                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} sm={2} />
                  <Col sm={9}>
                    <FormControl.Static>
                      OR
                    </FormControl.Static>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={3} sm={9}>
                    <div id="google-signin2" data-onsuccess="onSignIn" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="">
                  <Col componentClass={ControlLabel} sm={2} />
                  <Col sm={9}>
                    <FormControl.Static>
                      OR
                    </FormControl.Static>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={3} sm={9}>
                    <div
                      className="fb-login-button"
                      data-max-rows="1"
                      data-size="large"
                      data-button-type="continue_with"
                      data-show-faces="false"
                      data-auto-logout-link="false"
                      data-use-continue-as="false"
                      data-scope="public_profile, email"
                    />
                  </Col>
                </FormGroup>
                {profileState.loginError &&
                  <Alert bsStyle="danger">
                    <strong>Failed. {profileState.loginError} </strong>
                  </Alert>}
              </form>
            </Col>
            <Col xs={12} md={6}>
              <h3>Signup</h3>
              <form
                className="form form-horizontal"
                id="signUpForm"
                onSubmit={this.register}
              >
                <FormGroup controlId="formHorizontalSignupEmail">
                  <Col componentClass={ControlLabel} sm={3}>
                    Email
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalSignupPassword">
                  <Col componentClass={ControlLabel} sm={3}>
                    Password
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalSignupConfirmPassword">
                  <Col componentClass={ControlLabel} sm={3}>
                    C-Password
                  </Col>
                  <Col sm={9}>
                    <FormControl
                      name="cpassword"
                      type="password"
                      placeholder="Password"
                    />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={3} sm={9}>
                    <Button type="submit" bsStyle="info" bsSize="small">
                      {`${profileState.isSigningUp ? "Signing Up..." : "Sign Up"}`}
                    </Button>
                  </Col>
                </FormGroup>

                {profileState.signUpError &&
                  <Alert bsStyle="danger">
                    <strong>Failed. {profileState.signUpError} </strong>
                  </Alert>}

                {profileState.signUpSuccessMsg &&
                  <Alert bsStyle="success">
                    <strong>Verification email is sent. Please check!</strong>
                  </Alert>}
              </form>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}
