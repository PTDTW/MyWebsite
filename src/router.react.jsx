import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './pages/Home';
import MyProjects from './pages/myProjects';
import MyFriends from './pages/myFriends';
import Other from './pages/other';

const Router = () => {
  return (
    // <BrowserRouter >
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/projects' element={<MyProjects />} />
        {/* <Route path='/friends' element={<MyFriends />} /> */}
        <Route path='/other' element={<Other />} />
      </Routes>
    // </BrowserRouter>
  );
};

export default Router;
