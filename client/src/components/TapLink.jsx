import React from "react";
import { Link } from "react-router-dom";


const TapLink = (props) => {

    const {changeTap, tap, key} = props

    return (
        <div>
            <Link to={`/status/game/${key+1}`}>{tap}</Link>
        </div>
    )
}

export default TapLink
