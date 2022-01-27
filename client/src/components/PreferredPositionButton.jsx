import React, {useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

const PreferredPositionButton = (props) => {

    const [status, setStatus] = useState("");
    const history = useHistory()
    const {id} = props
    const [errArr, setErrorArr] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/showOneAuthor/${id}`)
        .then(res=>setStatus(res.data.status))
        .catch(err=>console.log(err.response))
    },[id])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/update/${id}`, {
            status
        })
            .then(res=>{
                console.log(status)
                // setStatus("")
                history.push("/status/game/1");
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
            <form onClick={onSubmitHandler}>
                <input type="submit" value="playing" name="status" onClick={(e)=>setStatus(e.target.value)} />
                <input type="submit" value="not playing" name="status" onClick={(e)=>setStatus(e.target.value)}/>
                <input type="submit" value="undecided" name="status" onClick={(e)=>setStatus(e.target.value)}/>
            </form>
            {
                errArr.map((err, i) =>(
                    <p key={i}>{err}</p>
                ))
                
                }
        </div>
    )
}

export default PreferredPositionButton
