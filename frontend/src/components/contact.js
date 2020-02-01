import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from './sideNav';
import './Layouts/contacts.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <SideNav />
                <div className="ContactList">
                    <h3>in create contacts</h3>
                    <button>
                        <Link to={'/admin/createcontact'}>Add Contact</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Contact;