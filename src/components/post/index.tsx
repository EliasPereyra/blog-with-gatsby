import { Link } from "gatsby";
import * as React from "react";

import "./post.module.css";

export default function Post({
  id,
  title,
  date,
  excerpt,
  slug,
}: {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}) {
  return (
    <article key={id}>
      <h2>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <small>Posted: {date}</small>
      <p className="post-content">{excerpt}</p>
    </article>
  );
}
