import * as React from "react";
import Navbar from "./navbar";

import "./layout.module.css";

export default function Layout({ pageTitle, children }: { pageTitle: string }) {
  return (
    <div className="container">
      <Navbar />
      <main>
        <small>{pageTitle}</small>
        {children}
      </main>
    </div>
  );
}
