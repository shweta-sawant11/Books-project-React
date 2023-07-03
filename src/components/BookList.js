import React, { useState, useEffect } from 'react'
import { API_URL } from './API'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Favcontext } from './ContextApi';
import {Col} from 'react-bootstrap';
const BookList = () => {

    const [books, setBooks] = useState([]);

    const navigate = useNavigate()

    // const {state, dispatch} = useContext(DataContext);
    // console.log(hello)
    // const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        axios.get(API_URL)
            .then((res) => {
                console.log(res.data);
                setBooks(res.data)
            })
            .catch((err) => console.log(err));
    }, []);

    const Globalstate = useContext(Favcontext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate)

    return (

        <>
            <div>
                <h1 className='mt-3'>Books Collection</h1>
            </div>
            <div className='maxWidth'>
                <div className='booklist'>
                    {
                        books.map((book) => {
                            return (
                                <Col>
                                    <div key={book.id} className='book'>
                                        <div><img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} /></div>
                                        <div><h4 className='text'>{book.title}</h4></div>
                                        <div><button className='btn' onClick={() => dispatch({ type: "ADD", payload: book })}>Add to Favorites</button></div>
                                    </div>
                                </Col>
                            )

                        }
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default BookList