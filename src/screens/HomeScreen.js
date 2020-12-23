import React, { useState, useEffect } from 'react';
import Header from '../components/front/Header';
import Search from '../components/front/Search';
import Characters from '../components/character/Character';
import Axios from 'axios';
import Pagination from '../components/front/Pagination';


function HomeScreen() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);



    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                // making a axios request
                const { data } = await Axios.get(
                    `https://www.breakingbadapi.com/api/characters?name=${query}`);
                setItems(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, [query]);

    //  current posts and post per page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <Header />
            <main>
                <Search getQuery={(query) => setQuery(query)} />
            </main>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={items.length}
                paginate={paginate}
            />
            <Characters loading={loading} items={currentPosts} />
        </div>
    );
}

export default HomeScreen
