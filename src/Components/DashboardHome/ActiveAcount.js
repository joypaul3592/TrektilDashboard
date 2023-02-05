import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import profileimg1 from '../../assect/image/profile1.png'
import profileimg2 from '../../assect/image/profile2.png'
import profileimg3 from '../../assect/image/profile3.png'
import profileimg4 from '../../assect/image/profile4.png'
const ActiveAcount = () => {
    const bookingData = [
        {
            id: 1,
            name: "Calvin Crip",
            bookingDate: "27 Nov, 2022",
            img: profileimg1,
            checked: true
        },
        {
            id: 2,
            name: "Calvin Crip",
            bookingDate: "24 Nov, 2022",
            img: profileimg2,
            checked: false
        },
        {
            id: 3,
            name: "Calvin Crip",
            bookingDate: "17 Nov, 2022",
            img: profileimg3,
            checked: false
        },
        {
            id: 4,
            name: "Calvin Crip",
            bookingDate: "14 Nov, 2022",
            img: profileimg4,
            checked: true
        },
    ]

    return (
        <div className=' w-full bg-white  text-black rounded border border-gray-300'>
            <div className=' py-6 px-5 border-b border-b-gray-300'>
                <div className=' gap-4 '>
                    <h1 className=' font-medium text-xl'>Activity Account</h1>
                    <p className=' text-sm text-gray-600'>Active their account</p>
                </div>
            </div>
            <div >
                {
                    bookingData.map(data => <div className='flex items-center justify-between px-5 mt-5 ' key={data.id}>
                        <div className=' flex items-center'>
                            <img className=' h-14 w-14 bg-white rounded-full' src={data.img} alt="imaga" />
                            <div className='ml-8'>
                                <h1 className=' font-medium'>{data.name}</h1>
                                <p className=' text-sm text-gray-600'> {data.bookingDate}</p>
                            </div>
                        </div>
                        <div className=''>
                            <FaCheckCircle className={`${data.checked == true ? 'text-green-500' : 'text-black'}`} />
                        </div>
                    </div>)
                }
            </div>
            <div className=' w-full text-red-700 font-medium flex justify-end mt-7 mb-5 px-5'>
                <button>See More</button>
            </div>
        </div>
    );
};

export default ActiveAcount;