import React from "react";
import { Outlet } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
      <h1>App</h1>
      <Outlet />
    </div>
  );
}

export default App;
