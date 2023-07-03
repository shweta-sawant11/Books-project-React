
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Col } from 'react-bootstrap';

import { BOOK_DETAILS_URL } from './API'
const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
      .then(res => {
        setBook(res.data)
      }).catch(err => console.log(err))
  }, [id]);

  return (
    <Container>

      <div className='bookdetails'>
        <Col>
          <div className='bookimage'>
            <h2>{book.title}</h2>
            <img src={book.image_url} alt='#' />
          </div>
          <div className='bookdescription'>
            <h2>Read Book</h2>
            <p>{book.description}</p>
            <h2>Authors</h2>
            <p>{book.authors}</p>
            <h2>Geners</h2>
            <p>{book.genres}</p>
          </div>
        </Col>
      </div>

    </Container>
  )
}

export default BookDetails