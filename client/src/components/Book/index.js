import React from "react";
import "./style.css";

function Book({ title, authors, image, description, link }) {
  return (
    <div className="book-info">
      <div className="book-buttons">
        <button onClick={() => {
          window.open(link, "_blank");
        }}>View</button>
        <button>Save</button>
      </div>
      <h5>{title}</h5>
      <h6>Written By: {authors.join(", ")}</h6>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default Book;