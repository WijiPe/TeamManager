import React, {useState} from 'react';
import Tap from '../components/Tap';
import PlayerStatusTable from '../components/PlayerStatusTable';


const PlayerStatus = (props) => {

    const [tap, setTap] = useState("")
    const [index, setIndex] = useState(null)
    const [refresh, setRefresh] = useState(false)

    const findGame =(newTap, index) =>{
        setTap(newTap)
        setIndex(index)
    }

    // const reload1 = () =>{
    //     setRefresh(!refresh)
    // }

    return (
        <div>
            <h3>Player Status - {tap}</h3>
            <h4><Tap findGame={findGame}/></h4>
            <PlayerStatusTable index={index} />
        </div>
    )
}

export default PlayerStatus
