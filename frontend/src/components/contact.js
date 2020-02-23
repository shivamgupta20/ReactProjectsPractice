import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from './sideNav';
import './Layouts/contacts.css';
import { connect } from 'react-redux';
import { getContact } from './store/actions/contactAction';

class Contact extends React.Component {
    componentDidMount() {
        this.props.getContact();
    }
    render() {
        // if (this.props.contacts.data)
        console.log(this.props.contacts.ContactsData.contactsList);
        return (
            <div>
                <SideNav />
                <div className="ContactList">
                    <h3>Contacts</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Sr.No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.contacts.ContactsData.contactsList &&
                                this.props.contacts.ContactsData.contactsList.map((con, i) =>
                                    <tr key={con._id}>
                                        <td> {i} </td>
                                        <td> <img src={con.image} />  </td>
                                        <td> {con.name} </td>
                                        <td> {con.dob} </td>
                                        <td> {con.description} </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <button>
                        <Link to={'/admin/createcontact'}>Add Contact</Link>
                    </button>
                </div>
            </div>
        );
    }
}

const MapStatetoProps = (state) => ({
    contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({ getContact: () => dispatch(getContact()) })


export default connect(MapStatetoProps, mapDispatchToProps)(Contact);