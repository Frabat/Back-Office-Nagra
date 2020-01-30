import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Main from "./VOD/MainPage";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </div>
  </Router>,

  document.getElementById('root')

);
