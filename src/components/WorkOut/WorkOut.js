import React from 'react';

const WorkOut = ({ workout }) => {
    const { id, name, img, desc, time, age } = workout;
    return (
        <div className='h-80 w-60 p-3 rounded-md bg-white'>
            <img className='rounded-md' src={img} alt="workout" />
            <div>
                <h5 className='text-lg font-semibold text-gray-900 py-3'>{name}</h5>
                <p className='text-gray-500 font-normal mb-3'>{desc}</p>
                <p className='text-slate-800 font-medium mb-2'>Age Required: {age}</p>
                <p className='text-slate-800 font-medium'>Time Required: { time}s</p>
            </div>
        </div>
    );
};

export default WorkOut;