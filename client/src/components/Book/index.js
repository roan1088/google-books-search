import React from "react";
import "./style.css";
import API from "../../utils/API";

function Book({ title, authors, image, description, link }) {
  if (!authors) {
    authors = ["No authors found"];
  }
  const saveBook = () => {
    const book = {
      title, authors, image, description, link
    }
    API.postBook(book).then(res => console.log(res));
  }

  return (
    <div className="book-info">
      <div className="book-buttons">
        <button onClick={() => {
          window.open(link, "_blank");
        }}>View</button>
        <button onClick={saveBook}>Save</button>
      </div>
      <h5>{title}</h5>
      <h6>Written By: {authors.join(", ")}</h6>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default Book;