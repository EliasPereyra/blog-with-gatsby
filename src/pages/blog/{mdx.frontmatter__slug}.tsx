import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

export default function BlogPost({ data, children }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <small>{data.mdx.frontmatter.date}</small>
      {children}
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const HEAD = () => <Seo title="Blog posts" />;
