import React from 'react'
import {Link} from "react-router-dom"

const Main = (props) => {

    const {children} = props

    return (
        <div>
            <h3><Link to={'/player/list'} >List </Link> | <Link to={'/addplayer'} > Add Player</Link></h3>
            {children}
        </div>
    )
}

export default Main
