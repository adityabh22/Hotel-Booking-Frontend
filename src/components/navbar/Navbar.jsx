import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function gotolink() {
    return navigate("/login");
  }

  function gotoolink() {
    return navigate("/register");
  }

  function handleLogout() {
    navigate("/logout");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotel booking</span>
        </Link>
        {user && user.username ? (
          <div className="navItems">
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={gotolink}>
              Login
            </button>
            <button className="navButton" onClick={gotoolink}>
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
