import React from 'react';
import ActiveAcount from '../../../Components/DashboardHome/ActiveAcount';
import BookingTable from '../../../Components/DashboardHome/BookingTable';
import Cards from '../../../Components/DashboardHome/Cards';
import Chart from '../../../Components/DashboardHome/Chart';
import ConversationRate from '../../../Components/DashboardHome/ConversationRate';
import Income from '../../../Components/DashboardHome/Income';
import LatestBooking from '../../../Components/DashboardHome/LatestBooking';

const DashHome = () => {
    return (
        <div>
            <Cards />
            <div className=' flex gap-10 my-16'>
                <div className='w-1/3'>
                    <LatestBooking />
                </div>
                <div className=' w-2/3'>
                    <Chart />
                </div>
            </div>
            <BookingTable />
            <div className=' grid grid-cols-3 gap-5 my-16'>
                <ConversationRate />
                <ActiveAcount />
                <Income />
            </div>
        </div>
    );
};

export default DashHome;