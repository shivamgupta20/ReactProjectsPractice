import React from 'react';
import MovieForm from './movieform';

class EditMovie extends React.Component {
    render() {
        return (
            <div>
                <h1> Editing Movie Details</h1>
                <MovieForm movieId={this.props.match.params.movieid} />
            </div>
        )
    }
}
export default EditMovie;