import React from 'react';
import CharacterItems from './CharacterItem';
import Spinner from '../front/Spinner';

function Character({ items, loading }) {
    return loading ? (
        <Spinner />
    ) : (
            <div className='cards'>
                {items.map(item => (
                    <CharacterItems key={item.char_id} item={item} onClick={() => (console.log(items.char_id))} />

                ))}
            </div>
        )
}

export default Character
