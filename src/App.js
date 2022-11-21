import React from "react";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import  Login from "./Login";

export default function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        
         
        
      </Routes>
    </div>
  );
}