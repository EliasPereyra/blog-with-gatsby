import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Post from "../../components/post";

export default function Blog({ data }) {
  return (
    <Layout pageTitle="My posts about software">
      <p>Here you'll find all my posts talking about software development</p>
      <ul>
        {data.allMdx.nodes.map(post => (
          <Post
            id={post.id}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            slug={post.frontmatter.slug}
          />
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
        parent {
          ... on File {
            modifiedTime(formatString: "MMM D, YYYY")
          }
        }
      }
    }
  }
`;

export const HEAD = () => <Seo title="My posts about software" />;
