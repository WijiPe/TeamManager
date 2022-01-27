import React, {useState} from 'react';
import Tap from '../components/Tap';


const PlayerStatus = (props) => {

    const {children} = props
    const [tap, setTap] = useState("")

    const findGame =(newTap) =>(
        setTap(tap, newTap)
    )

    return (
        <div>
            <h4><Tap findGame={findGame}/></h4>
            {children}
        </div>
    )
}

export default PlayerStatus
