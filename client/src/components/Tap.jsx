import React from 'react';
import { Link } from "react-router-dom";


let TabInput = ["Game 1", "Game 2", "Game 3"];


const Tap = (props) => {

    const {findGame} = props

    return (
        <div>
            {
                TabInput.map((tap, i)=>{ 
                    return (
                        <Link key={i} to={`/status/game/${i+1}`} onClick={()=>findGame(tap)}>   {tap} |   </Link>
                    )
                })
            }
        </div>
    )
}

export default Tap
