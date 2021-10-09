import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Characters from './Characters'
import SearchActor from './SearchActor'

const ActorCards = () => {
    const [items, setItems] = useState([])
    const [query, setQuery] = useState('')

    //Get info actors API 
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
            setItems(result.data);
        }
        fetchItems()
    }, [query])
    return (
        <>
            <SearchActor getQuery={(q) => setQuery(q)} />
            <div className="actor__cards">
                {items.map((item => (
                    <Characters
                        key={item.char_id}
                        name={item.name}
                        img={item.img}
                        occupation={item.occupation}
                        status={item.status}
                        birthday={item.birthday}
                        nickname={item.nickname}
                        category={item.category}
                    />
                )))}
            </div>
        </>
    )
}
export default ActorCards
