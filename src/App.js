import React from 'react';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
