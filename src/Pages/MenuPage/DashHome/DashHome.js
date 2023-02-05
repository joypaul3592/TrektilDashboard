import React from 'react';
import BookingTable from '../../../Components/DashboardHome/BookingTable';
import Carts from '../../../Components/DashboardHome/Carts';
import Chart from '../../../Components/DashboardHome/Chart';
import ConversationRate from '../../../Components/DashboardHome/ConversationRate';
import LatestBooking from '../../../Components/DashboardHome/LatestBooking';

const DashHome = () => {
    return (
        <div>
            <Carts />
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
                <ConversationRate />
                <ConversationRate />
            </div>
        </div>
    );
};

export default DashHome;