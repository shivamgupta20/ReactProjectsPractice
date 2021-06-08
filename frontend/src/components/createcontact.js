import React from 'react'
import SideNav from './sideNav'
import './Layouts/contacts.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postContact } from './store/actions/contactAction'

const CreateContact = () => {
    const validate = values => {
        let errors = {
            dob: "",
            name: ""
        };
        if (!values.name) {
            errors.name = "Contact Name cannot be blank."
        }
        if (!values.dob) {
            errors.dob = "Please enter the date/place/country of birth"
        }
        return errors
    }

    // const formik = useFormik({
    //     initialValues: {
    //         name: "",
    //         dob: "",
    //         description: ""
    //     },
    //     validate
    // })

    return (
        <div>
            <SideNav />
            <div className="ContactList"><br />
                <h3>Adding Contacts</h3><br /><br />
                <form>
                    <label className="custom-label">Name</label>
                    {/*<input type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}></input>
                     {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    <br />
                    <label className="custom-label">Date of Birth</label>
                    <input type="text" name="dob" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob}></input><br />
                    <label className="custom-label">Description</label>
                    <textarea name="description" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}></textarea><br /> */}
                    {/* <input type='file' onChange={this.fileUpload}></input><br /><br /> */}
                    {/* <button to="/admin/contact" onClick={this.saveContact}> */}
                    {/* <Link to="/admin/contact"> Save </Link> */}
                    {/* </button> */}
                    <button>
                        <Link to="/admin/contact"> Cancel</Link>
                    </button>
                </form>
            </div>
        </div>
    )


}


const MapStateToProps = (state) => {
    return ({
        contacts: state.contact
    })
}

const DispatchStateToProps = dispatch => {
    postContact = () => dispatch(postContact())
}

// export default connect("", { postContact })(CreateContactFormik)
export default connect(MapStateToProps, { postContact })(CreateContact)