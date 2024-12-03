import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/components/style.css";
import App from "./App.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/404Page.jsx";
import HomePage from "./components/HomePage.jsx";
import AddBooks from "./components/AddBookS.jsx";
import BookDetails from "./components/BookDetails.jsx";
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/browseBooks",
        element: <BrowseBooks />,
      },
      {
        path: "/addBooks",
        element: <AddBooks />,
      },
      {
        path: "/BookDetails/:id",
        element: <BookDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute}></RouterProvider>
  </StrictMode>
);
