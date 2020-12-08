import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import SearchResult from "../../components/SearchResult";
import API from "../../utils/API";

function Search() {
  useEffect(() => {
    document.title = "Google Books Search";
  }, []);

  const [book, setBook] = useState("");
  const [bookResult, setBookResult] = useState({totalItems: -1});

  const searchBook = (e) => {
    e.preventDefault();
    API.getGoogleBooks(book).then(({ data }) => {
      // console.log(data);
      setBookResult(data);
    });
  }

  return (
    <main>
      <SearchForm searchBook={searchBook} setBook={setBook} />
      {bookResult.totalItems === -1 ? "" : bookResult.totalItems > 0 ? <SearchResult books={bookResult.items} /> : <p>No books found!</p>}
    </main>
  );
}

export default Search;