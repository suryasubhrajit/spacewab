import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Explore from './pages/Explore';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='booking' element={<Booking />} />
      <Route path='explore' element={<Explore />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);