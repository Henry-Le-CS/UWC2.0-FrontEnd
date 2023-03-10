import React from "react";
import Role from "./pages/Role/role"
import Register from "./pages/Register/register"
import Login from "./pages/Login/login"
import BO from "./pages/BO/BO"
import Worker from "./pages/Worker/worker"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
function App() {
  return (
    <div className="my--app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Role />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/BO" element={<BO />}></Route>
          <Route path="/Worker" element={<Worker />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
