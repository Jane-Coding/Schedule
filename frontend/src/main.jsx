import { Component, StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import TodayPage from './TodayPage.jsx';
import DenseTable from './DenseTable.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/today" element={<TodayPage />} />
          <Route path="/week" element={<DenseTable />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  </StrictMode>,
)
