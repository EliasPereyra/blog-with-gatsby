import * as React from "react";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

export default function Seo({ title }: { title: string }) {
  const siteTitle = useSiteMetadata();

  return (
    <title data-testid="title">
      {title} | {siteTitle}
    </title>
  );
}
