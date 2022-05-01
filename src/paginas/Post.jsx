import React from "react";
import { busca } from "../api/api";
import "../assets/css/post.css";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams()
  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    busca(`/posts/${id}`, setPost);
  }, [id]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  );
}
