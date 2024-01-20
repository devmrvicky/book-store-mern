import React from "react";
import { Home } from "./pages";
import { Outlet } from "react-router-dom";
import { Container } from "./components";

const App = () => {
  return (
    <div>
      <Container>
        <div className="text-center text-2xl my-2">Book store</div>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
