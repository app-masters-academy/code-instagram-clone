import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.png";
import "./home.css";
import Footer from "../footer";
import PostList from "../postList";
import { API } from "../../api";

function Home() {
  // Check if have posts now
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    API.get("/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((apiError) => {
        setLoading(false);
        setError(apiError.response.data.error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Code Instagram Clone</p>
      </header>
      <Link to="/criar">Criar post</Link>
      {!loading ? <PostList posts={posts} /> : <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <Footer />
    </div>
  );
}

export default Home;
