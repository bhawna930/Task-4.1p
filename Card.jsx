import React from "react";
import './Card.css'

const Card = (props) => {
    return <div className="column">
        <img src={props.avatar} alt="staff" width={300} height={200}/>
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        <p>{props.rating}</p>
        </div>
}

export default Card;