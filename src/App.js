import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
