import React from 'react';
import './Layouts/google.css';
import apps from '../media/apps.png';
import googlelogo from '../media/googlelogo.png';

class Google extends React.Component {

    render() {
        return (
            <div>
                <div className="gheader">
                    <ul>
                        <li className="gheaderOpt"><a href="sign.asp" className="custom-button"> Sign In </a></li>
                        <li className="gheaderOpt"><img src={apps} alt="" style={{ "width": "30px" }} /></li>
                        <li className="gheaderOpt"><a href="news.asp">Images</a></li>
                        <li className="gheaderOpt"><a href="default.asp">Gmail</a></li>
                    </ul>
                </div>
                <div className="gbody">

                    <img src={googlelogo} className="googlelogo" alt="" style={{ "width": "200px", "float": "center" }} />
                    <br />
                    <input type="search" className="searchbox" style={{ "width": "500px", "float": "center" }} />
                    <br />
                    <br />

                    <button className="SearchBut">Google Search</button>
                    <button className="SearchBut"> I'm Feeling Lucky </button>
                    <br />

                </div>
                <div className="gfooter">
                    <ul>
                        <li><a href="sign.asp" className="gfooteropt"> Advertising </a></li>
                        <li><a href="news.asp" className="gfooteropt">Business</a></li>
                        <li><a href="default.asp" className="gfooteropt">About</a></li>
                        <li><a href="default.asp" className="gfooteropt">How Search works</a></li>
                    </ul>
                </div>
            </div >
        )
    }

}
export default Google;