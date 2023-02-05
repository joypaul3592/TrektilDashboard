import React from 'react';

const Income = () => {



    const bookingData = [
        {
            id: 1,
            amount: 45222,
            month: "This month",
            groth: "w-9/12",
            color: 'bg-sky-600'
        },
        {
            id: 2,
            amount: 40708,
            month: "Last month",
            groth: "w-8/12",
            color: 'bg-blue-600'
        },
        {
            id: 3,
            amount: 6518,
            month: "This month due",
            groth: "w-8/12",
            color: 'bg-green-600'
        },
        {
            id: 4,
            amount: 8454,
            month: "Last month",
            groth: "w-7/12",
            color: 'bg-orange-600'
        },
    ]


    return (
        <div className=' w-full bg-white  text-black rounded border border-gray-300'>
            <div className=' py-6 px-5 border-b border-b-gray-300'>
                <div className=' gap-4 '>
                    <h1 className=' font-medium text-xl'>Monthly Income</h1>
                    <p className=' text-sm text-gray-600'>Reviews of last month and due</p>
                </div>
            </div>
            <div className=' pb-4'>
                {
                    bookingData.map(data => <div className=' px-5 mt-5 ' key={data.id}>
                        <h1 className=' text-2xl font-medium'>${data.amount}</h1>
                        <div class="w-full bg-gray-200 my-1 rounded-full h-2.5 ">
                            <div class={`${data?.color} h-2.5 rounded-full ${data.groth}`} ></div>
                        </div>
                        <p className=' text-gray-600'>{data?.month}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Income;