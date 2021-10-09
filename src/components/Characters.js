import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

function Characters({ name, img, occupation, status, birthday, nickname, category }) {
    const [isFlipped, setIsFlipped] = useState(false)

    //Function flip-effect
    function handleClick() {
        setIsFlipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front side */}
            <div className="card__actors">
                <h1><span>Actor : </span>{name}</h1>
                <img src={img} alt="img" width="200px" height="250px" />
                <p>{occupation[0]}</p>
                <button
                    className="btn__flip"
                    onClick={handleClick}
                >Click</button>
            </div>
            {/* Back side */}
            <div className="card__actors" onClick={handleClick}>
                <img src={img} alt="img" width="200px" height="250px" />
                <ul className="actor_back_side_card">
                    <li>Nickname : {nickname}</li>
                    <li>Status : {status}</li>
                    <li>Birthday : {birthday}</li>
                    <li>Category : {category}</li>
                </ul>
            </div>
        </ReactCardFlip>
    )
}
export default Characters;
