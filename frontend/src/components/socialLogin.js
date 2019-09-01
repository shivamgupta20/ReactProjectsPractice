import React from 'react';
import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { fbLogin } from './store/actions/authActions';

class SocialLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        }
    }
    responseGoogle = (res) => {
        // console.log(res)
    }
    componentClicked = () => {
        // console.log("Clicked")
    };
    responseFacebook = (res) => {
        // console.log(res);
        fbLogin({ id_token: res.accessToken, socialProvider: 'facebook' });
    };
    render() {
        return (
            <div>
                <FacebookLogin
                    appId="2388482664523943"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
                {/* <br/>
                <GoogleLogin
                    clientId="467004512810-0bfrogiui9nggkblivl2k2madh7vrnt1.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> */}
            </div>
        )
    }
}
export default connect(null, { fbLogin })(SocialLogin);
// export default SocialLogin;