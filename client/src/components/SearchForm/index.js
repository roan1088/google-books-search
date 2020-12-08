import React from "react";
import "./style.css";

function SearchForm() {
  return (
    <form className="search-form">
      <label htmlFor="book-title">Book Search</label>
      <br />
      <input type="text" name="book-title" placeholder="Book Title" />
      <br />
      <div className="button-area">
        <button>Search</button>
      </div>
    </form>
  );
}

export default SearchForm;