import React from 'react';
import './Layouts/tiledata.css';
import heartIcon from '../media/heart-icon.jpg';

function TileData(props) {
    // console.log(props);
    return (
        <div className='tile'>
            <div >
                <img src={props.data.image} alt="carousel img" />
            </div>
            <div className="tileinfo">
                <div className="rating">
                    <img src={heartIcon} style={{ 'width': '20px' }} alt="icon" />
                    80%
                    </div>
                <div className="info">
                    {props.data.title}
                </div>
            </div>
        </div>)
}

export default TileData; 