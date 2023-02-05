import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import reviewImg1 from '../../assect/image/review1.jpeg'
import reviewImg2 from '../../assect/image/user1.jpg'
import reviewImg3 from '../../assect/image/user2.jpg'
import reviewImg4 from '../../assect/image/user3.jpg'
const Reviews = () => {


    const reviewsData = [
        {
            id: 1,
            name: "Joy Paul",
            img: reviewImg1
        },
        {
            id: 2,
            name: "Anik Sikder",
            img: reviewImg2
        },
        {
            id: 3,
            name: "Imran Hossain",
            img: reviewImg3
        },
        {
            id: 4,
            name: "Arif Khan",
            img: reviewImg4
        },

    ]




    return (
        <div>
            <div className=' mb-10'>
                <h1 className=' text-2xl font-semibold text-blue-500'>Reviews</h1>
                <p className=' text-sm text-gray-600'>Our valuable reviews from customer.</p>
            </div>
            <div className=' grid xl:grid-cols-2 grid-cols-1 gap-10'>

                {
                    reviewsData.map(data => <div key={data.id} className=' flex items-center gap-6 p-5 border border-blue-500 rounded-lg'>
                        <div>
                            <div className='h-40 w-40 bg-blue-500 overflow-hidden rounded-full p-1 '>
                                <img className='  bg-red-400 rounded-full ' src={data.img} alt="imgae" />
                            </div>
                        </div>
                        <div>
                            <p className=' text-xs font-medium tracking-wider '>WRITTEN BY</p>
                            <h1 className=' text-2xl font-semibold mb-3 mt-1 text-blue-500'>{data.name}</h1>
                            <p className=' text-justify text-sm text-gray-600 mb-6'>I've been working on Web projects since 2005 with a primary focus on web development and design. After spending many years on a self-taught path, I discovered a natural passion for writing and have been keeping up appearances ever since.</p>
                            <div className='flex items-center gap-4 text-xl '>
                                <FaHome className=' hover:text-blue-500 cursor-pointer' />
                                <BsTwitter className='hover:text-blue-500 cursor-pointer' />
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex justify-center'>
                <button className=' py-1.5 font-medium text-blue-500 px-7 border border-blue-500 rounded-lg  hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out text-sm mx-auto mt-12'>See More</button>
            </div>
        </div>
    );
};

export default Reviews;