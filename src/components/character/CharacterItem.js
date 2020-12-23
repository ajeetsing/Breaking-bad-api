import React from 'react';
import { Link } from 'react-router-dom';

function CharacterItem({ item }) {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <Link to={`/${item.char_id}`}>
                        <h1>{item.name}</h1>
                    </Link>
                    <ul>
                        <Link to={`/${item.char_id}`}>
                            <li>
                                <strong>Actor Name:</strong> {item.portrayed}
                            </li>
                        </Link>
                        <li>
                            <strong>occupation:</strong> {item.occupation.toString()}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
