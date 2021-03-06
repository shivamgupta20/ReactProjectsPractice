import React from 'react';
import SideNav from './sideNav';
import { connect } from 'react-redux';
import { getMovies } from './store/actions/movieAction';
import { getContact } from './store/actions/contactAction';
import { postCast } from './store/actions/castActions';

class AddCast extends React.Component {
    constructor(props) {
        super(props);
        this.fieldUpdate = this.fieldUpdate.bind(this);
        this.selContact = this.selContact.bind(this);
        this.saveCast = this.saveCast.bind(this);
        this.state = { movieId: "", contactId: [] }
    }

    fieldUpdate(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    selContact(e) {
        var conId = [];
        var options = e.target.options;
        for (var i = 0; i < e.target.options.length; i++) {
            if (e.target.options[i].selected)
                conId.push(e.target.options[i].value);
        }

        this.setState({
            ...this.state,
            contactId: conId

        });
    }

    saveCast(e) {
        e.preventDefault();
        this.props.postCast(this.state)
    }

    componentDidMount() {
        this.props.getMovies();
        this.props.getContact();
    }
    render() {
        // console.log(this.state)
        return (<div>
            <SideNav />
            <div style={{ marginLeft: '160px' }}>
                <h3> Adding Cast </h3><br />
                <label >Select Movie</label>
                <select name='movieId' type='select' onChange={this.fieldUpdate}>
                    <option>Select..</option>
                    {this.props.movies.MoviesData.moviesList &&
                        this.props.movies.MoviesData.moviesList.map(selectMovie =>
                            <option key={selectMovie._id} value={selectMovie._id}>{selectMovie.title}</option>
                        )
                    }
                </select><br /><br />
                <label >Select Contact</label>

                <select multiple name='contactId' onChange={this.selContact}>
                    {
                        this.props.contacts.ContactsData.contactsList &&
                        this.props.contacts.ContactsData.contactsList.map(con =>
                            <option key={con._id} value={con._id}> {con.name}</option>
                        )
                    }

                </select><br /><br />
                <label className="custom-label">Category</label>
                <input type='text' name='category'></input><br /><br />
                <button onClick={this.saveCast}>Save</button>
            </div>
        </div>)
    }
}

const MapStateToProps = state => ({
    movies: state.movies,
    contacts: state.contacts
})

const MapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(getMovies()),
    getContact: () => dispatch(getContact()),
    postCast: (data) => dispatch(postCast(data))
})

export default connect(MapStateToProps, MapDispatchToProps)(AddCast);