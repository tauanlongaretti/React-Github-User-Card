import React from "react";
import axios from "axios";
import Tauan from "./TauanCard";

const TauanCard = props => {
    return (
        <div>
            {props.cardList.map(card => (
                <Tauan 
                  key={card.id}
                  card={card}
                  location={location}
                  bio={bio}
                />
            ))}
        </div>
    )
}

export default TauanCard;