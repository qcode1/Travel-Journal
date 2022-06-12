import React from "react";
import TravelLogo from "../images/travel-logo.png";

export default function Header() {

    return (
        <div className="header">
            <h1 className="page-title"> <img src={TravelLogo} alt="Travel Journal"></img> My Travel Journal.</h1>
        </div>
    )

}
