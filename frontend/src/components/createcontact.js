import React from 'react';
import SideNav from './sideNav';
import './Layouts/contacts.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postContact } from './store/actions/contactAction';

class CreateContact extends React.Component {
    constructor(props) {
        super(props);
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.state = ({ contactName: "", dob: "", desc: "" });
    }

    fieldUpdate(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    saveContact() {
        console.log(this.state);
        this.props.postContact(this.state);
    }

    render() {
        return (
            <div>
                <SideNav />
                <div className="ContactList">
                    <h3>Adding Contacts</h3>
                    <form>
                        <label className="custom-label">Name</label>
                        <input type="text" name="contactName" onChange={this.fieldUpdate}></input><br />
                        <label className="custom-label">Date of Birth</label>
                        <input type="date" name="dob" onChange={this.fieldUpdate}></input><br />
                        <label className="custom-label">Description</label>
                        <input type="text" name="desc" onChange={this.fieldUpdate}></input><br />
                        <button to="/admin/contact" onClick={this.saveContact}>
                            <Link to="/admin/contact"> Save </Link>
                        </button>
                        <button>
                            <Link to="/admin/contact"> Cancel</Link>
                        </button>
                    </form>
                </div>
            </div>
        )
    }

}
const MapStateToProps = (state) => {
    return ({
        contacts: state.contact
    });
}
export default connect("", { postContact })(CreateContact);