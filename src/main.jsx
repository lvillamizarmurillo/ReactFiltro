import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import NotFound from './components/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
        <Header>
          <Routes>
            <Route index element={<h1>Inicio</h1>} />
            <Route path="/producto/:id?" element={<Section/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Header>
    </BrowserRouter>
  </React.StrictMode>
)
