import React, { useEffect, useState } from "react";
import Book from "../../components/Book";
import API from "../../utils/API";

function Saved() {
  useEffect(() => {
    document.title = "Saved Books";
    API.getAllBooks().then(({ data }) => {
      // console.log(data);
      setBooks(data);
    })    
  }, []);

  const [books, setBooks] = useState([]);

  return (
    <main>
      <p>Saved Books</p>
      {books.map(book => <Book {...book} key={book._id} />)}
    </main>
  );
}

export default Saved;