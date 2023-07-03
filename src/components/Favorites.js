import React, { useContext } from 'react'
import { Favcontext } from './ContextApi';
import { useNavigate } from 'react-router-dom'

const Favorites = () => {

  const navigate = useNavigate();
  const Globalstate = useContext(Favcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  return (
    <div>
      <h1>Add your Favorite books of list</h1>
      {state.map((book) => {
        return (
          <>
            <div>
              <img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} />
            </div>
              <button className='btn' onClick={() => dispatch({ type: "REMOVE", payload: book })}>Remove</button></>
        )
      })}
    </div>
  )
}

export default Favorites