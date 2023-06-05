import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Blog({ data }) {
  return (
    <Layout pageTitle="My posts about software">
      <p>Here you'll find all my posts talking about software development</p>
      <ul>
        {data.allFile.nodes.map(post => (
          <li key={post.name}>{post.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const HEAD: React.FC = () => <Seo title="My posts about software" />;
