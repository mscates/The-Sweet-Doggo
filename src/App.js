import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/accounts/login" component={LoginPage} />
          <Route path="/accounts/signup" component={SignUpPage} />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
