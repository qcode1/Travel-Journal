import React from "react";
import travelData from "../data";
import LocationIcon from "../images/location-icon.png"

export default function Card(props) {

    return (
        <div className="card">
            <div className="card-img-div">
                <img src={props.imageUrl} alt="Travel" className="card-img"></img>
            </div>
            <div>
                <img src={LocationIcon} alt="Location" className="location-icon"></img>
                <span className="location">{props.location}</span>
                <span className="location-link">View On Google Maps</span>
                <h1>{props.title}</h1>
                <span className="duration">{props.startDate} - {props.endDate}</span>
                <p className="description">
                    {props.description}
                </p>
            </div>
        </div>
    )

}