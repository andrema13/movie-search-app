import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";

const App = () => {
  return (
    <div className="App">
      <h1>Movies App</h1>
      <Outlet />
    </div>
  );
};

export default App;
