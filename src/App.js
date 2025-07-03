import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import Root from "./components/Root";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }> 
    <Route index element={<Navigate to="/home" replace />} />
    <Route path='home' element={ <Home/> }/>
    <Route path='about' element={ <About />} />
  </Route> 
))

function App() {
    return (
      <>
        <RouterProvider router={router} />
      </>
      
    )
}

export default App; 