import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";

// Helper function to capitalize genres
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function BrowseBooks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const reduxBooks = useSelector((store) => store.book.books); // Access books array from Redux
  const { data, error, loading } = useFetch(
    "https://www.freetestapi.com/api/v1/books"
  );

  const [searchText, setSearchText] = useState("");

  // Combine Redux books with API books
  const books = useMemo(() => {
    return data ? [...data, ...reduxBooks] : reduxBooks;
  }, [data, reduxBooks]);

  // Generate filteredBooks dynamically based on searchText
  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, books]);

  // Generate genres dynamically
  const genres = useMemo(() => {
    return Array.from(
      new Set(
        books.flatMap((book) =>
          book.genre ? book.genre.map((g) => g.toLowerCase()) : []
        )
      )
    );
  }, [books]);

  // Debounce search input to reduce re-renders
  const handleDebouncedSearch = useMemo(
    () =>
      debounce((value) => {
        setSearchText(value);
      }, 300),
    []
  );

  useEffect(() => {
    return () => handleDebouncedSearch.cancel(); // Cleanup debounce
  }, [handleDebouncedSearch]);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Search Bar */}

      <div>
        <input
          type="text"
          placeholder="Enter book title"
          onChange={(e) => handleDebouncedSearch(e.target.value)}
        />
      </div>

      {/* All Books Section */}
      <div className="allBooks">
        <ul className="categories">
          <Slider {...settings}>
            {genres.map((genre) => (
              <a key={genre} href={`#${genre}`}>
                <li>{capitalize(genre)}</li>
              </a>
            ))}
          </Slider>
        </ul>
        <h2>All Books</h2>
        <Slider {...settings}>
          {filteredBooks.map((book) => (
            <div key={book.id} className="Book">
              <div>
                <img
                  src="https://files.oaiusercontent.com/file-UMtqs5YnHRZ8NngWpFcPtg?se=2024-12-01T11%3A05%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D164a5f95-c003-4c8f-98bd-28f8b592ee16.webp&sig=x4f5/6hS0H335F5tgmmbr3bZo6AP7xnD6M02hkFBAek%3D"
                  style={{ width: "100%", height: "300px" }}
                ></img>
              </div>
              <h1>{book.title}</h1>
              <h3>Author: {book.author || "Unknown"}</h3>
              <p>{book.description || "No description available."}</p>
              <p>Rating: {book.rating || "N/A"}</p>
              <Link to={`/BookDetails/${book.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* Genres Section */}
      <div className="genreList">
        {genres.map((genre) => (
          <div key={genre} className="genre" id={genre}>
            <h1>{capitalize(genre)}</h1>
            <div className="genreBookList">
              {filteredBooks
                .filter((book) =>
                  book.genre?.map((g) => g.toLowerCase()).includes(genre)
                )
                .map((book) => (
                  <div key={book.id} className="genreBook">
                    <div>
                      <img
                        src="https://files.oaiusercontent.com/file-UMtqs5YnHRZ8NngWpFcPtg?se=2024-12-01T11%3A05%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D164a5f95-c003-4c8f-98bd-28f8b592ee16.webp&sig=x4f5/6hS0H335F5tgmmbr3bZo6AP7xnD6M02hkFBAek%3D"
                        style={{ width: "100%", height: "300px" }}
                      ></img>
                    </div>

                    <h1>{book.title}</h1>
                    <h3>Author: {book.author || "Unknown"}</h3>
                    <p>{book.description || "No description available."}</p>
                    <p>Rating: {book.rating || "N/A"}</p>
                    <Link to={`/BookDetails/${book.id}`}>
                      <button>View Details</button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BrowseBooks;
