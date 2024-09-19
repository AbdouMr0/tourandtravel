import './TripStyles.css'
import TripData from './TripData';
import React from 'react';
import boat from '../Images/boat.jpeg'
import France from '../Images/6.jpg'
import Malaysia from '../Images/7.jpg'
function Trip(){
    return(
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique 
            destination using Google Maps.
            </p>
            <div className='tripcard'>
                <TripData 
                    image={boat}
                    heading="Trips in Indonesia"
                    text="Tndonesia, offiacially the Republic of Indonesia, 
                    is a country in Southeast Asia and Oceania beteen the India
                    and Pacific oceans"
                />
                <TripData 
                    image={Malaysia}
                    heading="Trips in Indonesia"
                    text="Embark on a journey through Malaysia, where modern skyscrapers
                        in Kuala Lumpur contrast with serene beaches and lush jungles,
                        offering a blend of cultural diversity and natural beauty."
                />
                <TripData 
                    image={France}
                    heading="Trips in France "
                    text="Experience the charm of France, 
                    from the iconic landmarks of Paris to the picturesque vineyards of Bordeaux, 
                    promising a journey of art, cuisine, and timeless allure."
                />
            </div>

        </div>
    )
}
export default Trip;