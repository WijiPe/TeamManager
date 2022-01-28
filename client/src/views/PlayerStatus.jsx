import React, {useState} from 'react';
import Tap from '../components/Tap';
import PlayerStatusTable from '../components/PlayerStatusTable';


const PlayerStatus = () => {

    const [tap, setTap] = useState("")
    const [index, setIndex] = useState(null)

    const findGame =(newTap, index) =>{
        setTap(newTap)
        setIndex(index)
    }



    return (
        <div>
            <h3>Player Status - {tap}</h3>
            <h4><Tap findGame={findGame}/></h4>
            <PlayerStatusTable index={index} />
        </div>
    )
}

export default PlayerStatus
