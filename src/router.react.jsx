import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './pages/Home';
import MyProjects from './pages/myProjects';
import MyTeams from './pages/myTeams';
import Exchange from './pages/exchanges';
import Other from './pages/other';
// News
// import News from './pages/news';

const Router = () => {
  return (
    // <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/projects' element={<MyProjects />} />
        <Route path='/teams' element={<MyTeams />} />
        {/* <Route path='/exchange' element={<Exchange />} /> */}
        <Route path='/other' element={<Other />} />

        {/* News */}
        {/* <Route path='/news/:date' element={<News />} /> */}

      </Routes>
    // </BrowserRouter>
  );
};

export default Router;
