import React, { useState, useEffect } from "react";

import logo from "./logo.png";
import "./App.css";
import Footer from "./footer";
import PostList from "./postList";
import AuthView from "./auth";

import { API, setAuthToken } from "./api";

// const posts = [
//   {
//     userName: "Tiago Gouvêa",
//     imageUrl:
//       "https://media-exp1.licdn.com/dms/image/C4E1BAQHL_wUxS-bCKg/company-background_10000/0?e=2159024400&v=beta&t=3HdnPDimuYPZ9cG_6luD380mbXO9u0dih1J4xY6JRA0",
//     imageDescription: "Galera da App Masters programando",
//   },
//   {
//     userName: "Igor Sasaoka",
//     imageUrl:
//       "https://m.campuse.ro/archives/profile_photos/2018/09/18/616693-1014796373.jpg",
//     imageDescription: "Salve quase todos",
//   },
//   {
//     userName: "Code Júnior",
//     imageUrl: "https://codejr.com.br/wp-content/uploads/2020/09/quem-somos.jpg",
//     imageDescription: "Time da gestão 2020.1",
//   },
// ];

// const posts = [];

function App() {
  // Check if have posts now
  const initialState = localStorage.getItem("auth-token");
  const [isLogged, setIsLogged] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (isLogged) {
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
    }
  }, [isLogged]);
  
  if (!isLogged) {
    return (
      <AuthView
        loading={loading}
        error={error}
        handleLogin={(user) => {
          if (user && user.password) {
            setLoading(true);
            API.post("/users/login", user)
              .then((response) => {
                setAuthToken(response.data.token);
                setIsLogged(response.data);
                setLoading(false);
              })
              .catch((apiError) => {
                setLoading(false);
                setError(apiError.response.data.error);
              });
          }
        }}
      />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Code Instagram Clone</p>
      </header>

      {!loading ? <PostList posts={posts} /> : <p>Carregando...</p>}

      <Footer />
    </div>
  );
}

export default App;
