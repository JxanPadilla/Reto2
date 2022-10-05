import React from 'react'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from './App';
import Menu from './Menu';

function Principal() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/ >}></Route>
            <Route path="/Menu" element={<Menu/ >}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Principal