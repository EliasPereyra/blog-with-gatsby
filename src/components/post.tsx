import * as React from "react";

export default function Post({
  id,
  title,
  date,
  excerpt,
}: {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}) {
  return (
    <article key={id}>
      <h2>{title}</h2>
      <small>Posted: {date}</small>
      <p>{excerpt}</p>
    </article>
  );
}
