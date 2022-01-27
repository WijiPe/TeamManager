import React, {useState} from 'react';
import Tap from '../components/Tap';


const PlayerStatus = (props) => {

    const {children} = props
    const [tap, setTap] = useState("")

    const findGame =(newTap) =>{
        setTap(newTap)
        console.log(newTap)
    }
       
        // console.log(newTap)

    return (
        <div>
            <h3>Player Status {tap}</h3>
            <h4><Tap findGame={findGame}/></h4>
            {children}
        </div>
    )
}

export default PlayerStatus
