import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./hero.module.css";

const headingStyles = {
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};

export default function Hero() {
  return (
    <section>
      <h1 style={headingStyles}>Welcome to my blog</h1>
      <p style={paragraphStyles}>Know everything about software development</p>
      <StaticImage
        src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="Planning & development"
      />
    </section>
  );
}
