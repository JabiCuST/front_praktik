import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { LogIn } from "./pages/login.js";
import { Registration } from "./pages/registration.js";
import "./App.css";
import { ComponentsHeader } from "./components/header.js";

export function App() {
  return (
    <div className="App">
      <ComponentsHeader></ComponentsHeader>
      <Routes>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
