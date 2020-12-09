import React from "react";
import Book from "../Book";

function SearchResult({ books }) {
  return (
    <div>
      <p>Search results</p>
      {books.map(({ volumeInfo }) => {
        if (!volumeInfo.imageLinks) {
          volumeInfo.imageLinks = {
            thumbnail: "https://via.placeholder.com/100x150?text=404+Image+not+found"
          };
        }
        return <Book {...volumeInfo} image={volumeInfo.imageLinks.thumbnail} link={volumeInfo.infoLink} key={volumeInfo.infoLink} />;
      })}
    </div>
  );
}

export default SearchResult;