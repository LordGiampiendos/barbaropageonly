import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import PageNotFound from './components/error';
import React from 'react';
import CookieConsent from './components/CookieConsent';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes class='main-content'>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <CookieConsent />
            <Footer />
        </div>
    );
}

export default App;
