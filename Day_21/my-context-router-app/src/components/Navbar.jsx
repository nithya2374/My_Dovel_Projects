import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
