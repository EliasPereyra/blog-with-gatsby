import * as React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout pageTitle="About me">
      <h2>I'm Elias, author of this blog</h2>
      <p>I developed this website with Gasby.js</p>
    </Layout>
  );
}

export const Head = () => <title>About me</title>;
