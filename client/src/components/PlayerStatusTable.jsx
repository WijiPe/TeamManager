import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PreferredPositionButton from './PreferredPositionButton';


const PlayerStatusTable = () => {

    const [refresh, setRefresh] = useState(false)
    const [players, setPlayers] = useState(null)

    useEffect(()=>{
        axios.get(`http://localhost:8000/showPlayers`)
        .then(res=>setPlayers(res.data))
        .catch(err=>console.log(err.response))
    },[refresh])

    return (
        <div>
            <table class="table" >
                <thead className="table-info">
                    <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {   players&& 
                players?
                players.map((player, i) => (
                    <tbody>
                        <tr key={i} className="table-success">
                            <td>{player.player_name}</td>
                            <td>
                                <PreferredPositionButton id={player._id} />
                                {player.status}
                            </td>
                        </tr>
                    </tbody>
                )): <>Loading...</>
            }
            </table>
        </div>
    )
}

export default PlayerStatusTable
