import React from 'react';
import { MdArrowDropUp } from 'react-icons/md';

const Carts = () => {

    const cartData = [
        {
            id: 1,
            name: "Number of Booking",
            amount: "3500+",
            incrageNumber: '02',
            progress: 50,
            color: 'bg-green-600'
        },
        {
            id: 2,
            name: "New Revenue",
            amount: "$35000+",
            incrageNumber: '03',
            progress: 55,
            color: 'bg-blue-600'
        },
        {
            id: 3,
            name: "Total of Company",
            amount: "155+",
            incrageNumber: '07',
            progress: 75,
            color: 'bg-emerald-600'
        },


    ]

    return (
        <div className=' grid grid-cols-3 gap-10 '>
            {
                cartData.map(cart => <div className=' py-5 px-5 border border-gray-300 rounded-2xl shadow-md text-black' key={cart.id}>
                    <h1 className=' text-gray-600'>{cart.name} </h1>
                    <h2 className=' text-xl font-medium'>{cart.amount}</h2>
                    <div class="w-full bg-gray-200 my-1 rounded-full h-2.5 ">
                        <div class={`${cart.color} h-2.5 rounded-full w-1/2`} ></div>
                    </div>
                    <div className='text-gray-600 flex  items-center justify-between'>
                        <p>Last month</p>
                        <div className='flex items-center'>
                            <MdArrowDropUp className=' text-xl' />
                            <p>{cart.incrageNumber}%</p>
                        </div>
                    </div>
                </div>)
            }
        </div >
    );
};

export default Carts;