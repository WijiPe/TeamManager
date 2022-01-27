import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AddPlayer = () => {

    const [player_name, setPlayer_name] = useState("")
    const [preferred_position, setPreferred_position] = useState("")
    const history = useHistory()
    const [errArr, setErrorArr] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/addPlayer', {
            player_name, preferred_position
        })
            .then(res=>{
                setPlayer_name("")
                setPreferred_position("")
                history.push("/player/list");
            })
            .catch(err=>{
                const errResponse = err.response.data.errors
                const errors = [];
                for(const key of Object.keys(errResponse)){
                    errors.push(errResponse[key].message)
                }
                setErrorArr(errors)
            })
    }
    return (
        <div>
            <h4>Add Player</h4>
            <form onSubmit= {onSubmitHandler}>
                <div className="form-group">
                    <label><h5>Player Name:</h5></label>
                    <input type ="Text" onChange={(e)=>setPlayer_name(e.target.value)} value={player_name}/>
                </div>
                <div onChange={(e)=>setPreferred_position(e.target.value)} className="form-group">
                <label><h5>Preferred Position:</h5></label>
                    <input type="radio" value="Forward" name="preferred_position" /> Forward
                    <input type="radio" value="Midfielder" name="preferred_position" /> Midfielder
                    <input type="radio" value="Goldkeeper" name="preferred_position" /> Goldkeeper
                </div>
                <button type ="submit" >Add</button>
            </form>
            {
                errArr.map((err, i) =>(
                    <p key={i}>{err}</p>
                ))
                
            }
        </div>
    )
}

export default AddPlayer
