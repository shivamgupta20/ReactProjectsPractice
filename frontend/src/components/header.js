import React from 'react';
import { Link } from 'react-router-dom';
// import logo1 from './Layouts/Bookmyshow-logo-white-1.jpg';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="mHeader">
                    {/* <img src={logo1} className="headerLogo" /> */}
                    <div>
                        <input type="text" placeholder="Search for Movies, Events" className="searchbar"></input>
                    </div>
                </div>
                <div className="menuHeader">
                    <ul>
                        <li className="menuOptions"><Link to='/movies'> Movies</Link></li>
                        <li className="menuOptions">Events</li>
                        <li className="menuOptions"><Link to='/plays'>Plays</Link></li>
                    </ul>
                </div>
            </div >

        )
    }
}

export default Header;