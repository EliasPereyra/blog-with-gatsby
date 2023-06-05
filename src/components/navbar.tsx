import * as React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/blog">My posts</Link>
        </li>
      </ul>
    </nav>
  );
}
