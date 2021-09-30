import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Post from "./Pages/Post";
import {Switch, Route } from "react-router-dom";


const App =() => {

return(
  <>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/contact" component={Contact} />
  <Route exact path="/about" component={About} />
  <Route exact path="/services" component={Service} />
  <Route exact path="/post" component={Post} />

  </Switch>
</>

  );
};

export default App;