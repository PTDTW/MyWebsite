import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './pages/Home';
import MyProjects from './pages/myProjects';
import MyTeams from './pages/myTeams';
import Other from './pages/other';

const Router = () => {
  return (
    // <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/projects' element={<MyProjects />} />
        <Route path='/teams' element={<MyTeams />} />
        <Route path='/other' element={<Other />} />
      </Routes>
    // </BrowserRouter>
  );
};

export default Router;
