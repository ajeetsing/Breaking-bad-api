import React, { useState } from 'react'

function Search({ getQuery }) {
    const [text, setText] = useState();

    function onChange(q) {
        setText(q);
        getQuery(q);
    }
    return (
        <div className='search'>
            <form>
                <input
                    className='form-input'
                    type='text'
                    placeholder='Search by character name'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus

                />
            </form>

        </div>
    )
}

export default Search
