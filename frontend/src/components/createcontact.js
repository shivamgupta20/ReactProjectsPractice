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
        this.fileUpload = this.fileUpload.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.state = ({ name: "", dob: "", description: "", image: "" });
    }

    fieldUpdate(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    saveContact() {
        // console.log(this.state);
        this.props.postContact(this.state);
    }

    fileUpload(e) {
        const self = this;
        const file = e.target.files[0];
        var reader = new FileReader();
        var img = "";
        reader.onloadend = function () {
            // img = reader.result;
            self.setState({
                ...this.state,
                image: reader.result
            })
        }
        reader.readAsDataURL(file);
        // console.log(img)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <SideNav />
                <div className="ContactList"><br />
                    <h3>Adding Contacts</h3><br /><br />
                    <form>
                        <label className="custom-label">Name</label>
                        <input type="text" name="name" onChange={this.fieldUpdate}></input><br />
                        <label className="custom-label">Date of Birth</label>
                        <input type="date" name="dob" onChange={this.fieldUpdate}></input><br />
                        <label className="custom-label">Description</label>
                        <input type="text" name="description" onChange={this.fieldUpdate}></input><br />
                        <input type='file' onChange={this.fileUpload}></input><br /><br />
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

const DispatchStateToProps = dispatch => {
    postContact = () => dispatch(postContact())
}

export default connect("", { postContact })(CreateContact);