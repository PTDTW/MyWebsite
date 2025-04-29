import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import Router from './router.react.jsx'; // Import Router


// import './style/tailwind.css'; // Import Tailwind
import '@master/css'; // Import MasterCss

import './style/App.css'; // Import your CSS
import Navbar from './components/layout/Navbar.jsx'; // Import SiderBar
import Footer from './components/layout/Footer'; // Import SiderBar

import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000, // Duration of the animation in milliseconds
});

// WOW.js
// import WOW from 'wowjs';
// import 'animate.css';

// new WOW.WOW().init();

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className='flex flex-direction:column min-height:100vh'>
            <Navbar />
            <main className='flex:1'>
              <Router />
            </main>
            <Footer />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
