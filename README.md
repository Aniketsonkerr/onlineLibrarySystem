Online Library System 📚
An online library system built with React, featuring dynamic routing, Redux for state management, and form validation. The application allows users to browse, view, add books, and navigate seamlessly through the library system.

Features
Home Page:

Landing page with a welcome message.
List of book categories (e.g., Fiction, Non-Fiction, Sci-Fi).
Display popular books with links to detailed views.
Navigation bar with links to Home, Browse Books, and Add Book.
Browse Books Page:

Filter books by category using dynamic routing (/books/:category).
Search functionality to filter books by title or author.
Links to view detailed information about individual books.
Book Details Page:

Displays detailed information about a selected book (title, author, description, and rating).
Includes a "Back to Browse" button.
Add Book Page:

A form to add new books to the library.
State management using Redux for the book list.
Redirects to the Browse Books page upon successful submission with the new book displayed.
Includes form validation to ensure all required fields are filled.
404 Page:

Custom "Page Not Found" route for undefined routes.
Link back to the Home page.
Installation and Setup
Prerequisites
Ensure you have the following installed on your system:

Node.js (v14 or higher)
npm or yarn
