import React from 'react';
import Error404 from '../images/error.gif'

const NotFound = () => {
    return (
        <div className='mt-28'>
            <section className='container'>
                <img className='mx-auto' src={Error404} alt="" />
                <h3 className='text-red-600 animate-pulse text-center font-medium'>Page not Found</h3>
            </section>
        </div>
    );
};

export default NotFound;