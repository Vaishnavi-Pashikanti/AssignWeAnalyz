import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <header className="header">
      <h1>
        <em>Helpdesk</em>
      </h1>
      <nav>
        <ul className="header-links">
          {!user && (
            <>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
          {user && (
            <>
              <li>
                <Link to={user.role === "admin" ? "/admin/profile-setting" : "/user/profile-setting"}>
                  Profile
                </Link>
              </li>
              <li>
                <button className="btn" onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}