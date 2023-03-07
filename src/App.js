import React from "react";
import Role from "./pages/Role/role"
import Register from "./pages/Register/register"
import Login from "./pages/Login/login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
function App() {
  return (
    <div className="my--app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Role />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login   />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
