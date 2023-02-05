import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Main/Dashboard';
import DashHome from './Pages/MenuPage/DashHome/DashHome';
import DashReviews from './Pages/MenuPage/DashReviews/DashReviews';

const App = () => {
  return (
    <div className='overflow-x-hidden'>

      <Routes>
        <Route path='/' element={<Dashboard ></Dashboard>}>
          <Route path='/dashHome' element={<DashHome></DashHome>}></Route>
          <Route path='/reviews' element={<DashReviews></DashReviews>}></Route>
        </Route>
      </Routes>

    </div>
  );
};

export default App;
