import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination navigate'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item '>
                        <button type='button' onClick={() => paginate(number)} className="btn btn-success btn-lg buttonli">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
