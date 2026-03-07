import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">DarshanEase</Link>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">Home</Link>
          <Link className="btn btn-outline-light me-2" to="/darshan">Darshan</Link>
          <Link className="btn btn-outline-light me-2" to="/travel">Travel</Link>
          <Link className="btn btn-outline-light me-2" to="/booking">Bookings</Link>
          <Link className="btn btn-warning me-2" to="/login">Login</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;