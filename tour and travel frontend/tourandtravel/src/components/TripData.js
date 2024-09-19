import React from 'react';
import './TripStyles.css';

function TripData(props) {
    return (
        <div className='t-card'>
            <div className='t-imgae'>
                <img src={props.image} alt='img' />
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default TripData;
