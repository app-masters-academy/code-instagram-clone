import { useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import AuthView from "./components/auth";
import Home from "./components/home";
import PostForm from "./components/postForm";

import { API, setAuthToken } from "./api";

const PrivateRoutes = (props) => {
  return (
    <Switch>
      <Route path="/criar">
        <PostForm />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

const PublicRoutes = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  return (
    <Switch>
      <Route path="/">
        <AuthView
          loading={loading}
          error={error}
          handleLogin={(user) => {
            if (user && user.password) {
              setLoading(true);
              API.post("/users/login", user)
                .then((response) => {
                  setAuthToken(response.data.token);
                  props.setIsLogged(response.data);
                  setLoading(false);
                })
                .catch((apiError) => {
                  setLoading(false);
                  setError(apiError.response.data.error);
                });
            }
          }}
        />
      </Route>
    </Switch>
  );
};


const Routes = (props) => {
  // Check if have posts now
  const initialState = localStorage.getItem("auth-token");
  const [isLogged, setIsLogged] = useState(initialState);

  return (
    <BrowserRouter>
      {isLogged ? (
        <PrivateRoutes />
      ) : (
        <PublicRoutes setIsLogged={setIsLogged} />
      )}
    </BrowserRouter>
  );
};

export default Routes;
