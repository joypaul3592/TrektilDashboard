import React from 'react';

const BookingTable = () => {

    const bookingData = {
        heading: [
            {
                id: 1,
                name: 'No'
            },
            {
                id: 2,
                name: 'CLIENT NAME'
            },
            {
                id: 3,
                name: 'COMPANY ID'
            },
            {
                id: 4,
                name: 'BOOKING TO'
            },
            {
                id: 5,
                name: 'COST OF HOTEL'
            },
            {
                id: 6,
                name: 'STATUS'
            },
        ],
        tableData: [
            {
                id: 1,
                no: "#001",
                name: "Nik Rolando",
                id: "#CM012545",
                booking: "Hotel Aroma",
                cost: 102,
                status: 'Panding'
            },
            {
                id: 1,
                no: "#001",
                name: "Nik Rolando",
                id: "#CM012545",
                booking: "Hotel Royel",
                cost: 198,
                status: 'Accepted'
            },
            {
                id: 1,
                no: "#001",
                name: "Nik Rolando",
                id: "#CM012545",
                booking: "Hotel Claster",
                cost: 147,
                status: 'Deleted'
            },
            {
                id: 1,
                no: "#001",
                name: "Nik Rolando",
                id: "#CM012545",
                booking: "Hotel Aroma",
                cost: 136,
                status: 'Panding'
            },
            {
                id: 1,
                no: "#001",
                name: "Nik Rolando",
                id: "#CM012545",
                booking: "Hotel Aroma",
                cost: 145,
                status: 'Deleted'
            },
            {
                id: 1,
                no: "#001",
                name: "Nik Rolando",
                id: "#CM012545",
                booking: "Hotel Royel",
                cost: 125,
                status: 'Accepted'
            },
            {
                id: 1,
                no: "#001",
                name: "Nik Rolando",
                id: "#CM012545",
                booking: "Hotel Claster",
                cost: 142,
                status: 'Panding'
            },
            {
                id: 1,
                no: "#001",
                name: "Nik Rolando",
                id: "#CM012545",
                booking: "Hotel Aroma",
                cost: 178,
                status: 'Deleted'
            },

        ]
    }

    return (
        <div className=' w-full text-black'>
            <div className=' border rounded-t-lg border-gray-600 border-b-[0px]  py-7 px-5'>
                <h1 className=' text-2xl font-medium'>Booking Summary</h1>
                <p className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <table className='w-full text-'>
                <thead className=' text-left '>
                    <tr className=' border border-gray-600 shadow-md shadow-gray-300'>
                        {
                            bookingData.heading.map(hedaData => <th key={hedaData.id} className=' border border-gray-600 px-10 py-4 font-medium'>{hedaData.name}</th>)
                        }
                    </tr>
                </thead>
                <tbody >
                    {
                        bookingData.tableData.map(data => <tr key={data.id} className=' border border-gray-600  shadow-md shadow-gray-300'>
                            <td className=' broder border-gray-600 px-10 py-4'>{data.no}</td>
                            <td className=' border border-gray-600 px-10 py-4'>{data.name}</td>
                            <td className=' border border-gray-600 px-10 py-4'>{data.id}</td>
                            <td className=' border border-gray-600 px-10 py-4'>{data.booking}</td>
                            <td className=' border border-gray-600 px-10 py-4'>${data.cost}</td>
                            <td className=' border border-gray-600 px-10 py-4'><button className={`${data.status == 'Panding' ? 'bg-yellow-500' : data.status == 'Deleted' ? 'bg-red-500' : 'bg-green-500'} py-0.5 px-5 rounded  text-white`}>{data.status}</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className='shadow shadow-gray-300 py-5 rounded-b-lg border border-t-[0px] border-gray-600'></div>
        </div>
    );
};

export default BookingTable;