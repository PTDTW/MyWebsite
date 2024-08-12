import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import Router from './router.react.jsx'; // Import Router


// import './style/tailwind.css'; // Import Tailwind
import '@master/css'; // Import MasterCss

import './style/App.css'; // Import your CSS
import SiderBar from './components/layout/SiderBar'; // Import SiderBar
import Footer from './components/layout/Footer'; // Import SiderBar


// WOW.js
// import WOW from 'wowjs';
// import 'animate.css';

// new WOW.WOW().init();

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <div className={`AppSidebar flex`}>
            <SiderBar />
          </div>
          <div className={`AppRouter ml:300px ml:0@<md ~margin-left|300ms`}>
            <Router />
            <div className="mb:20px"></div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
