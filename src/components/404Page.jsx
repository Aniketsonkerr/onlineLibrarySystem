import { useRouteError } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  return (
    <>
      <h1>{err.data}</h1>
      <h1>{err.status}</h1>
      <Link to={"/"}>
        <h2>go back to home</h2>
      </Link>
    </>
  );
}

export default ErrorPage;
