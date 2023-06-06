import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

export default function BlogPost({ data, children }) {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <small>{data.mdx.frontmatter.date}</small>
      <figure>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <figcaption>
          <small>
            {data.mdx.frontmatter.hero_image_alt}
            <br />
            by{" "}
            <a href={data.mdx.frontmatter.hero_image_credits_link}>
              {data.mdx.frontmatter.hero_image_credits_text}
            </a>
          </small>
        </figcaption>
      </figure>
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
        hero_image_alt
        hero_image_credits_text
        hero_image_credits_link
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const HEAD = () => <Seo title="Blog post" />;
