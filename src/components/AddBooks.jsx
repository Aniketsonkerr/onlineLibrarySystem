import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { Link } from "react-router-dom";
import "./style.css";

function AddBooks() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const handleAddBook = () => {
    // Validate input fields
    if (!title.trim() || !author.trim() || !description.trim() || !rating) {
      alert("Please fill out all fields.");
      return;
    }

    // Ensure rating is a valid number and within range
    const numericRating = parseFloat(rating);
    if (isNaN(numericRating) || numericRating < 0 || numericRating > 5) {
      alert("Rating must be a number between 0 and 5.");
      return;
    }

    // Create book object
    const book = {
      id: Date.now(),
      title,
      author,
      description,
      rating: numericRating,
      url: "https://files.oaiusercontent.com/file-UMtqs5YnHRZ8NngWpFcPtg?se=2024-12-01T11%3A05%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D164a5f95-c003-4c8f-98bd-28f8b592ee16.webp&sig=x4f5/6hS0H335F5tgmmbr3bZo6AP7xnD6M02hkFBAek%3D",
    };

    // Dispatch action to add the book
    dispatch(addBook(book));

    // Clear form fields
    setTitle("");
    setAuthor("");
    setDescription("");
    setRating("");
    alert("your book will added at the end of the list.");
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <div className="form-group">
        <label>
          Title:
          <input
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Author:
          <input
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Description:
          <textarea
            placeholder="Enter book description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Rating:
          <input
            type="number"
            placeholder="Enter rating (0-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
      </div>
      <Link to={"/browseBooks"}>
        <button className="add-book-button" onClick={handleAddBook}>
          Add Book
        </button>
      </Link>
    </div>
  );
}

export default AddBooks;
