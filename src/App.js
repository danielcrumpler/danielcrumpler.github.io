import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="Navigation">
        <div className="Navigation_Left">
          <a className="Left_Link" href="/">Daniel Crumpler</a>
        </div>
        <div className="Navigation_Right">
          <a className="Right_Link" href="/">Home</a>
          <a className="Right_Link" href="/projects">Projects</a>
        </div>
      </div>
      <div className="Switch">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Home_Page">
      <div>
        Hello, my name is Daniel Crumpler. This page is a WIP.
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="Projects_Page">
      <div className="Project_Year_Grey">
        <h2 className="Projects_Page_Header">Current Projects</h2>
        <div className="Project_Item">
          <a className="Project_Item_Link" href="https://www.crabpool.us/">Crab Pool</a>
        </div>
      </div>
      <div className="Project_Year_White">
        <h2 className="Projects_Page_Header">Past Projects</h2>
        <h3>2020</h3>
      </div>
      <div className="Project_Year_White">
        <h3>2019</h3>
      </div>
    </div>
  );
}

export default App;
