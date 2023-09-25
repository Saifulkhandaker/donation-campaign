import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex gap-5 justify-center items-center'>
            <h1 className='text-5xl font-bold text-red-600'>Error....!</h1>
            <Link to="/"><button className='btn bg-green-500 text-white'>Go Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;