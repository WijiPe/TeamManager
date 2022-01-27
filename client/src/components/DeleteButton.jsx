import React, {useState} from 'react';
import axios from 'axios';

const Deletebutton = (props) => {

    const {id, reloadList, alertPopUp} = props
    const [errArr, setErrorArr] = useState([]);

    const clickHandler = ()=>{
        axios.delete(`http://localhost:8000/delete/${id}`)
            .then(res=> {
            reloadList();
            alertPopUp()
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
            <button onClick={clickHandler}>Delete</button>
            {
                errArr.map((err, i) =>(
                    <p key={i}>{err}</p>
                ))
                
            }
        </div>
    )
};

export default Deletebutton;
