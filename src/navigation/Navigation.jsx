import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Booking from '../pages/Booking';
import Explore from '../pages/Explore';

const Navigation = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/explore" element={<Explore />} />
            </Routes>
        </Router>
    );
}

export default Navigation;