import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './index'
import Mainpage from './mainpage'
import Managepage from "./managepage"
import './css/index.css'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/managepage" element={<Managepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
