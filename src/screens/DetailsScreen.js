import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Spinner from '../components/front/Spinner';

function DetailsScreen(props) {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const [quote, setQuote] = useState([]);
    const id = props.match.params.id;
    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                const { data } = await Axios.get(
                    `https://www.breakingbadapi.com/api/characters/${id}`
                );
                const quotesData = await Axios.get(
                    `https://breakingbadapi.com/api/quotes/${id}`
                );
                const [items] = data;
                const [quotes] = quotesData.data;
                setItem(items);
                setQuote(quotes);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, [id])
    return loading ? (
        <Spinner />
    ) : (
            <div className="infoparent">
                <Link className='an' style={{ fontSize: '20px', fontWeight: 'bold' }} to="/"> &#60;&#60; Back to HomePage</Link>
                <div className="infotop">
                    <div className="colum2">
                        <img className="large" src={item.img} alt={item.name}></img>
                    </div>
                    <div className="colum1">
                        <ul>
                            <li>
                                <strong>Actor Character Name:</strong> {item.name}
                            </li>
                            <li>
                                <strong>Birthday:</strong> {item.birthday}
                            </li>
                            <li>
                                <strong>Occupation:</strong> <ul>{item.occupation.map((data, index) => (<li key={index}>{data}</li>))}</ul>
                            </li>
                            <li>
                                <strong>Status:</strong> {item.status}
                            </li>
                            <li>
                                <strong>Nickname:</strong> {item.nickname}
                            </li>
                            <li>
                                <strong>Actor who portrayed:</strong> {item.portrayed}
                            </li>
                            <li>
                                <strong>Seasons in which the character appears:</strong> {(item.appearance !== null) ? item.appearance.toString() : "Do not Have any appearance"}
                            </li>
                        </ul>
                    </div>
                    <div className="colum1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <ul>
                                            <li>
                                                <strong>Quotes:</strong> {(id <= 30 && id >= 63) ? quote.quote : 'Do not have any quote'}
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default DetailsScreen
