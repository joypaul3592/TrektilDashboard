import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Pages/Main/Dashboard';
import CommingSoon from './Pages/MenuPage/CommingSoon/CommingSoon';
import DashHome from './Pages/MenuPage/DashHome/DashHome';
import DashReviews from './Pages/MenuPage/DashReviews/DashReviews';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Dashboard ></Dashboard>}>
          <Route path='/' element={<DashHome></DashHome>}></Route>
          <Route path='/reviews' element={<DashReviews></DashReviews>}></Route>
          <Route path='*' element={<CommingSoon></CommingSoon>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
