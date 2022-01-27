import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const PlayerList = () => {

    const [players, setPlayers] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/showPlayers`)
        .then(res=>{
            console.log(res.data)
            setPlayers(res.data)

        })
        .catch(err=>console.log(err.response))
    },[refresh])

    const reloadList = ()=>{
        setRefresh(!refresh)
    }

    const alertPopUp = () => {
        alert("Player was deleted");
    }

    return (
        <div>
            <table class="table" >
                <thead className="table-info">
                    <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                
            {   players&& 
                players?
                players.map((player, i) => (
                    <tbody>
                        <tr key={i} className="table-success">
                            <td>{player.player_name}</td>
                            <td>{player.preferred_position}</td>
                            <td><DeleteButton id={player._id} reloadList = {reloadList} alertPopUp={alertPopUp}/></td>
                        </tr>
                    </tbody>
                )): <>Loading...</>
            }
            </table>
        </div>
    )
}

export default PlayerList
