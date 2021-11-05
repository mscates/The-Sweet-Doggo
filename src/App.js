import React,  { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import FeedPage from "./pages/feed"
import { GlobalStyles } from "./GlobalStyles";
import dog1 from './images/dogs-2.jpg'


function App() {
const [users, setUsers] = useState([])
const [dogPosts, setDogPosts] = useState([
{
  postTitle: "Picture 1",
  postImage: dog1
},
{
  postTitle: "Picture 2",
  postImage: dog1
}
])

useEffect(() => {
const data = localStorage.getItem('my-users' )
if(data) {
setUsers(JSON.parse(data))
}
}, [])

useEffect(() => {
  localStorage.setItem('my-users', JSON.stringify(users))
})

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Landing users={users} setUsers={setUsers} />} />
          <Route path="/accounts/login" component={() => <LoginPage users={users} /> }/>
          <Route path="/accounts/signup" component={() => <SignUpPage users={users} setUsers={setUsers}/>} />
          <Route path="/feed" component={() => <FeedPage dogPosts={dogPosts} />} />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;