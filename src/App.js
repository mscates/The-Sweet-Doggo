import React,  { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import { GlobalStyles } from "./GlobalStyles";


function App() {
const [users, setUsers] = useState([])
{console.log('users', users)}

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/accounts/login" component={ LoginPage} />
          <Route path="/accounts/signup" component={() => <SignUpPage users={users} setUsers={setUsers}/>} />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;