import React from 'react';

const QNA = () => {
    return (
        <div className='py-10 flex justify-center items-center md:flex-row container mx-auto lg:flex-row sm:flex-col flex-col space-x-10'>
            <div className='w-80 border p-4 h-72 bg-white rounded-md'>
                <p>How Does React Work?</p>
                <small className='inline-block pt-4'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering our code.</small>
            </div>
            <div className='w-80 border p-4 h-72 bg-white rounded-md overflow-y-scroll'>
                <p>What is the difference between props and state?</p>
                <small className='py-4 inline-block'>Props is used to send data from parent component to child component.Props is unidirectional or one way data binding.Props are read only. Props cannot be modified.</small>
                <small className='inline-block'>The State is a built-in React object that is used to contain data. State changes can be asynchronous. State can be modified using this.setState.</small>
            </div>
            <div className='w-80 border p-4 h-72 bg-white rounded-md'>
                <p>What is the use of useEffect other than data loading?</p>
                <small className='inline-block py-4'>
                    <li>state change: validating input field</li>
                    <li>state change: live filtering</li>
                    <li>state change: trigger animation on new array value</li>
                    <li>props change: update paragraph list on fetched API data</li>
                </small>
            </div>
        </div>
    );
};

export default QNA;