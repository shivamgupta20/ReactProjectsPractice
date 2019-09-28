import React from 'react';
import './Layouts/tiledata.css';
import heartIcon from '../media/heart-icon.jpg';

class TileData extends React.Component {
    render() {
        console.log(this.props.data)
        return (
            <div className='tile'>
                <div >
                    <img src={this.props.data.image} alt="carousel image" />
                </div>
                <div className="tileinfo">
                    <div className="rating">
                        <img src={heartIcon} style={{ 'width': '20px' }} />
                        80%
                    </div>
                    <div className="info">
                        {this.props.data.title}
                    </div>
                </div>
            </div>)
    }
}

export default TileData; 