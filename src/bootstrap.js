import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import Contact from "./components/contact";
import AboutSober from "./components/AboutSober";
import AboutDrunk from "./components/AboutDrunk";
import "./style/main.scss";
import NavBar from "./components/NavBar";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/AboutSober">
          <AboutSober />
        </Route>
        <Route path="/AboutDrunk">
          <AboutDrunk />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
