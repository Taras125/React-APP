import React, { useState } from 'react'
import '../App.css'
import Cards from './Cards'

//Current cards state
const currentState = [
    { title: 'Actors name', id: 1 },
    { title: 'Nickname', id: 2 },
    { title: 'Information of the actor', id: 3 },
]
const About = () => {
    const [cards, setCards] = useState(currentState)

    //Function delete cards
    const deleteCards = () => {
        setCards(cards.filter(card => !card))
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>About <span style={{ color: 'yellow' }}>Actors</span></h1>
            <div className='card-list'>
                {cards.map(cards => {
                    return <Cards
                        key={cards.id}
                        cards={cards}
                        title={cards.title}
                        deleteCards={deleteCards}
                    />
                })}
            </div>
        </div>
    )
}
export default About;
