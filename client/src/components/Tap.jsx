import React from 'react';
import { Link } from "react-router-dom";


let TabInput = ["Game1", "Game2", "Game3"];


const Tap = (props) => {

    const {findGame} = props

    return (
        <div>
            {
                TabInput.map((tap, i)=>{ 
                    return (
                        <Link key={i} to={`/status/game/${i+1}`} onClick={()=>findGame(tap, i+1)}>   {tap} |   </Link>
                    )
                })
            }
        </div>
    )
}

export default Tap
