import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/login";
import SignUp from "../pages/SignUp";

function RoutesPages() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:Token"));

    if (token) {
      setAuthenticated(true);
    }
  }, [authenticated]);
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/signup">
        <SignUp authenticated={authenticated} />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
}

export default RoutesPages;
