import React, { useEffect, useState } from "react";
import Book from "../../components/Book";
import API from "../../utils/API";

function Saved() {
  useEffect(() => {
    document.title = "Saved Books";
    loadAllBooks();   
  }, []);

  const [books, setBooks] = useState([]);

  const loadAllBooks = () => {
    API.getAllBooks().then(({ data }) => {
      // console.log(data);
      setBooks(data);
    });
  }

  const deleteBook = (id) => {
    API.deleteBook(id).then(res => loadAllBooks());
  }

  return (
    <main>
      <p>Saved Books</p>
      {books.map(book => <Book {...book} key={book._id} deleteBook={deleteBook} />)}
    </main>
  );
}

export default Saved;