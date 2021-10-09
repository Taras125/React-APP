import React, { useState } from 'react'

const SearchActor = ({ getQuery }) => {
    const [text, setText] = useState('')

    const getText = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section>
            <form>
                <input
                    className="form__control"
                    type="text"
                    placeholder="Enter name"
                    autoFocus
                    value={text}
                    onChange={(e) => getText(e.target.value)}
                />
            </form>
        </section>
    )
}
export default SearchActor
