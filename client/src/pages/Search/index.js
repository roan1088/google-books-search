import React, { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import SearchResult from "../../components/SearchResult";

function Search() {
  useEffect(() => {
    document.title = "Google Books Search";
  }, []);

  const [book, setBook] = useState("");

  const searchBook = (e) => {
    e.preventDefault();
    console.log(book);
  }

  return (
    <main>
      <SearchForm searchBook={searchBook} setBook={setBook} />
      <SearchResult />
    </main>
  );
}

export default Search;