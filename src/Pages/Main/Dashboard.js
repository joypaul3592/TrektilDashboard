import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardNav from '../../layout/DashboardNav/DashboardNav';
import DashHome from '../MenuPage/DashHome/DashHome';
import DashReviews from '../MenuPage/DashReviews/DashReviews';


const Dashboard = () => {

    // Side Navbar
    const [close, setClose] = useState(JSON.parse(localStorage.getItem('close')));
    useEffect(() => {
        localStorage.setItem('close', JSON.stringify(close));
        setClose(close);
    }, [close]);


    return (
        <div className=' flex w-full  mx-auto relative '>
            <div className='  fixed bottom-0 top-0 left-[5%7] z-[9999] '>
                <DashboardNav setClose={setClose} close={close}></DashboardNav>
            </div>
            <div className={`b w-full transition-all duration-500  ease-in-out bg-secondary  ${close ? 'pl-20' : 'pl-80 duration-200'}`}>
                <div className=' w-full pr-20'>
                    <Routes>
                        <Route path='/' element={<DashHome></DashHome>}></Route>
                        <Route path='/reviews' element={<DashReviews></DashReviews>}></Route>

                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;