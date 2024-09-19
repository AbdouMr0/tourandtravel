import React from "react";
import mountain from "../Images/1.jpg";
import river from "../Images/2.jpg";
import DestinationData from "./DEstinationData";
import juice from '../Images/3.jpg'
import beach from '../Images/4.jpg'

const Destination = () => {
    return (
    <div className="destination">
    <h1>Popular Destination</h1>
    <p>Tours give you the opportunity to</p>
    <DestinationData
        className="first-des"
        heading="Tall Valcano, Batangas"
        text="One of the most iconic views in Luzon,Mt. Tall boasts a volcano
                        inside a lake inside an island. If you fancy a closer look, the hike
                        up the crater is mere 45 minutes,and is easy enough for
                        beginners.Guides will assist you most of the way, and you'll see the
                        perculiar environemet found on an active valcano , including
                        valcanic rocks and steam vents. THe hike can be dusty and hot, so
                        plan far an early monrning trip, and then unwind with some bulalo
                        before heading back home!"
        img1={mountain}
        img2={river}
    />
    <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="if you're looking for a hike that's a littles more challenging but still good for a beginner mountaineer ,check out Mt.
                Daguldul in San Juan ,Batangas.You'll start your hike from the beavh and pass through tropiacl forest,different rock 
                formations,and small streams.There's a small store halfwway up the trail where you can take a break and drink buko juice,
                and though the summit itself may not have the best view, the breeze is fantastic.Once you've made it back down, 
                head straight to the beach for a refreshing well-deserved swim. 
                "
        img1={juice}
        img2={beach}
    />
    </div>
);
};
export default Destination;
