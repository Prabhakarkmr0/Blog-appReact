import React from 'react'
import "./card.css"
import {Link} from "react-router-dom";



function Card({item}) {

    
    return (
        <div className="Card">
            <Link to={`/detail/${item.id}`}>

        <img className="Card__thumbnail" src="https://source.unsplash.com/random/200x300" alt=""></img>
        <div className="Card__info">
            <div className="Card__text">
                <h4>{item.title}</h4>
            </div>
        </div>
    </Link>
    </div>
    )
}

export default Card
