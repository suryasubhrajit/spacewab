import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom';
import "./index.css"

import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Explore from './pages/Explore';
import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/explore' element={<Explore />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);