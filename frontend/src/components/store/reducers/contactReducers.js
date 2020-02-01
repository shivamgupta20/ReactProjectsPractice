import { POST_CONTACT_START, POST_CONTACT_ERROR, POST_CONTACT_SUCCESS } from '../actions/actionTypes';

const initialState = {
    ContactsData: "",
    ContactData: "",
    LoadContact: false,
    error: ""
};

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CONTACT_START:
            return ({
                ...state,
                LoadContact: true
            });
        case POST_CONTACT_ERROR:
            return ({
                ...state,
                LoadContact: false,
                error: action.payload
            });
        case POST_CONTACT_SUCCESS:
            return ({
                ...state,
                LoadContact: false,
                ContactsData: action.payload
            });
        default:
            return state;

    }
}

export default ContactReducer;