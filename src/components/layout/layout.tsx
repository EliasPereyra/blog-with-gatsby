import * as React from "react";
import Navbar from "../navbar";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

import Footer from "../footer/footer";
import "./layout.module.css";

export default function Layout({ pageTitle, children }: { pageTitle: string }) {
  const siteTitle = useSiteMetadata();

  return (
    <div className="container">
      <Navbar />
      <main>
        <small>{siteTitle}</small>
        {children}
      </main>
      <Footer />
    </div>
  );
}
