import React from "react";
import Navbar from "./components/Navbar.js";
import Components from "./components.js";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="content-container">
        <Navbar />
        <Components />
      </div>
    </div>
  );
}

export default App;
