import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommingSoon = () => {
    const navigate = useNavigate()
    return (
        <div className=' h-screen w-full flex items-center justify-center text-center'>
            <div>
                <h1 className=' text-2xl text-blue-500 '>Comming Soon</h1>
                <p className=' text-sm'>Only <button className=' text-blue-500' onClick={() => navigate('/')}>Home</button> and <button className=' text-blue-500' onClick={() => navigate('/reviews')}>Reviews</button> page work</p>
            </div>
        </div>
    );
};

export default CommingSoon;