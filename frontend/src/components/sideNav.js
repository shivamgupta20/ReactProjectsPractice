import React from 'react';
import { Link } from 'react-router-dom';
import './Layouts/nav.css';


class SideNav extends React.Component {
    render() {
        return (
            <div className="sidenav">
                <Link to='/admin/movies'>List Movies </Link>
                <Link to='/admin/cImages'>Carousel Images </Link>
                <Link to='/admin/contact'>Contacts </Link>
            </div>)
    }
}

export default SideNav;