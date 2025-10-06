import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>logo</h1>
      <nav>
        <Link to="/">main page</Link>
        <Link to="/student-list">student list</Link>
      </nav>
    </header>
  );
};
