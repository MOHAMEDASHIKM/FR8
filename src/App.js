import React, { useState } from 'react';

import './App.css';
import AddBook from './AddBook.js';
import BookList from './BookList.js';
import Login from './Login';


function Home() {
    const [books, setBooks] = useState([]);
  
    const handleAddBook = (newBook) => {
      // Update the books state with the new book
      setBooks([...books, newBook]);
    };
    
  
    return (
      
      <div className="App">
        
        <h1>Library Management System</h1>
        <Login/>
        <h1>Library Management System</h1>
        <AddBook onAddBook={handleAddBook} />
        <h1>Library Management System</h1>

        <BookList books={books} />
        
      </div>
    );
  }
  
  export default Home;
  