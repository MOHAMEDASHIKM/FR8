// src/components/AddBook.js
import React, { useState } from 'react';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    // Implement code to add a book (e.g., send a request to a backend)
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='input'
        /><br/>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='input'
        /><br/>
        <button onClick={handleAddBook} className='btn'>Add new</button>
        
      </form>
    </div>
  );
}

export default AddBook;
