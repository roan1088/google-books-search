import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Route exact path={["/", "/search"]} component={Search} />
      <Route exact path="/saved" component={Saved} />
    </Router>
  );
}

export default App;
