import React from 'react';

const WorkOut = ({ workout }) => {
    const { id, name, img, desc, time, age } = workout;
    return (
        <div className='border h-80 w-60 p-3'>
            <img className='rounded-md' src={img} alt="workout" />
        </div>
    );
};

export default WorkOut;