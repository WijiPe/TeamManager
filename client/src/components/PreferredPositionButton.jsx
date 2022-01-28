import React, {useState} from "react";
import axios from "axios";

const PreferredPositionButton = (props) => {

    const {index, player} = props 
    const {id, reload} = props
    const [errArr, setErrorArr] = useState([]);
    const game = player[`game_${index}`]


    const onClickHandler = (statusText) =>{
        axios.put(`http://localhost:8000/update/${id}`, {
            [`game_${index}`]:statusText
        })
            .then(res=>{
                reload()
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
            {game==="playing"?
                <button onClick={(e)=>onClickHandler("playing")} className="btn btn-warning">playing</button>:
                <button onClick={(e)=>onClickHandler("playing")} className="btn btn-secondary">playing</button>
            }
            {game==="not playing"?
                <button onClick={(e)=>onClickHandler("not playing")} className="btn btn-danger">not playing</button>:
                <button onClick={(e)=>onClickHandler("not playing")} className="btn btn-secondary">not playing</button>
            }
            {game==="undecided"?
                <button onClick={(e)=>onClickHandler("undecided")}  className="btn btn-success">undecided</button>:
                <button onClick={(e)=>onClickHandler("undecided")}  className="btn btn-secondary">undecided</button>
            }
            {
                errArr.map((err, i) =>(
                    <p key={i}>{err}</p>
                ))
                
                }
        </div>
    )
}

export default PreferredPositionButton
