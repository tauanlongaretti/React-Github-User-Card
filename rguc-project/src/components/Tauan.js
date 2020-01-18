import react from "react";

const Tauan = props => {
    return (
        <div>
            <p>{props.card.name}</p>
            <p>{props.card.location}</p>
            <p>{props.card.bio}</p>
        </div>
    )
}

export default Tauan;