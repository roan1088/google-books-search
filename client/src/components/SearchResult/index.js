import React from "react";
import Book from "../Book";

function SearchResult({ books }) {
  return (
    <div>
      <p>Search results</p>
      {books.map(({ volumeInfo }) => <Book {...volumeInfo} image={volumeInfo.imageLinks.thumbnail} link={volumeInfo.infoLink} key={volumeInfo.infoLink} />)}
    </div>
  );
}

export default SearchResult;