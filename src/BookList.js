// src/components/BookList.js
import React from 'react';


function BookList({ books }) {
  return (
    <div>
      <h2 > Book List</h2>
      <ul className='bokl'>
      <p className='tit'>Title:</p><p> The Time Traveler's </p><br/>
      <p className='tit'>Author:</p><p> Audrey Niffenegger </p>
        {books.map((book, index) => (
          <li key={index} className='list'>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
