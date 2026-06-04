//import { useState } from 'react'

import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

//import Header from "./pages/Header/Header";
import Home from "./pages/Home";
 import Register from "./pages/Registration";
 import Login from "./pages//Login";

function App() {

//   const ProtectedRoute = () => {
//   const user = true;
//   return user ? <Outlet /> : <Navigate to="/" />;
// };

  return (
    <>
       <BrowserRouter>
        <Routes>
          {/* <Route element={<ProtectedRoute />}>
            
          </Route> */}


          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
                   

          
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
