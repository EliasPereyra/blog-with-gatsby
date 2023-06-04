import * as React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
      </ul>
    </nav>
  );
}
