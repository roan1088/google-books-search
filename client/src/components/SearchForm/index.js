import React from "react";
import "./style.css";

function SearchForm({ searchBook, setBook }) {
  return (
    <form className="search-form" onSubmit={searchBook}>
      <label htmlFor="book-title">Book Search</label>
      <br />
      <input type="text" name="book-title" placeholder="Book Title" onChange={(e) => {setBook(e.target.value)}} />
      <br />
      <div className="button-area">
        <button>Search</button>
      </div>
    </form>
  );
}

export default SearchForm;