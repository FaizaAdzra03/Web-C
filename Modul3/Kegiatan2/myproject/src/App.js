// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About_us from "./Pages/About_us";
import Contact_us from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about_us" Component={About_us} />
        <Route path="/contact_us" Component={Contact_us} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
};

export default App;
