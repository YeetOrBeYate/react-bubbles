import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute"
import "./App.css"

import Login from "./components/Login";


function App() {
  return (
    
      <div className="App">
        <nav>
    <Link to= "/login">Login</Link>
    <Link to="/protected">Friends</Link>
    </nav>
    

    <Switch>
      <Route path = '/login' component={Login}/>
      <PrivateRoute path = "/protected">
        <Route path = "/protected" component={BubblePage}/>
      </PrivateRoute>
      <Route component={Login}/>
    </Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    
  );
}

export default App;
