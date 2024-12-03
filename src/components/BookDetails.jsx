import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../utils/useFetch";

function BookDetails() {
  const { id } = useParams(); // Extract the book ID from the URL
  const reduxBooks = useSelector((store) => store.book.books); // Access Redux store
  const { data, error, loading } = useFetch(
    `https://www.freetestapi.com/api/v1/books/${id}` // Assuming API supports fetching a single book by ID
  );

  // Find the book in Redux or fallback to API data
  const book = reduxBooks.find((b) => b.id === id) || data;

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (!book) {
    return <h1>Book not found</h1>;
  }

  return (
    <div className="book-details">
      <Link to="/browseBooks" className="back-button">
        ← Back to Browse
      </Link>
      <div className="book-details-content">
        <div className="book-image">
          <img
            src={
              book.image ||
              "https://via.placeholder.com/300x450?text=No+Image+Available"
            }
            alt={`${book.title} cover`}
          />
        </div>
        <div className="book-info">
          <h1>{book.title}</h1>
          <h2>Author: {book.author || "Unknown"}</h2>
          <p>{book.description || "No description available."}</p>
          <p>Genre: {book.genre?.join(", ") || "Unknown"}</p>
          <p>Rating: {book.rating || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
