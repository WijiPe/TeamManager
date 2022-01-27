import React, {useEffect, useState} from "react";
import axios from "axios";

const PreferredPositionButton = (props) => {

    const [status, setStatus] = useState("");
    const {id, reload} = props
    const [errArr, setErrorArr] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/showOnePlayer/${id}`)
        .then(res=>setStatus(res.data.status))
        .catch(err=>console.log(err.response))
    },[id])


    const onClickHandler = (statusText) =>{
        setStatus(statusText)
        axios.put(`http://localhost:8000/update/${id}`, {
            status: statusText
        })
            .then(res=>{
                setStatus(statusText)
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
            {status==="playing"?
                <button onClick={(e)=>onClickHandler("playing")} className="btn btn-warning">playing</button>:
                <button onClick={(e)=>onClickHandler("playing")} className="btn btn-secondary">playing</button>
            }
            {status==="not playing"?
                <button onClick={(e)=>onClickHandler("not playing")} className="btn btn-danger">not playing</button>:
                <button onClick={(e)=>onClickHandler("not playing")} className="btn btn-secondary">not playing</button>
            }
            {status==="undecided"?
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
