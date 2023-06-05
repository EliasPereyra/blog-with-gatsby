import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const siteTitle = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return siteTitle.site.siteMetadata.title;
};
