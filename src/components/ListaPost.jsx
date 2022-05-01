import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { busca } from "../api/api";

export default function ListaPost({ url }) {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    busca(url, setPost);
  }, [url]);

  return (
    <section className="posts container">
      {post.map((post) => (
        <Link to={`/posts/${post.id}`} className={`cartao-post cartao-post--${post.categoria}`}>
          <article key={post.id}>
            <h3 className="cartao-post__titulo">
              {post.title}
              <p className="cartao-post__meta">{post.meta}</p>
            </h3>
          </article>
        </Link>
      ))}
    </section>
  );
}


