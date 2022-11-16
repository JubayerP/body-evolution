import React, { useState } from "react";

const Activity = ({ time }) => {
    const [breakTime, setBreakTime] = useState(0);
    console.log(breakTime);
    const breakTimeSeconds = [10, 20, 30, 40, 50];
    
    const handleBreakTime = (breakTime) => {
        setBreakTime(breakTime);
    }
    
  return (
    <div className="sticky top-0 pt-10 px-6">
      <div className="flex items-center space-x-3">
        <img
          className="w-12 rounded-full"
          src="https://placeimg.com/80/80/people"
          alt=""
        />
        <span>
          <h5 className="text-lg font-semibold">Jubayer Hossain</h5>
          <small className="text-gray-600 text-sm">Sylhet, Bangladesh</small>
        </span>
      </div>
      <div className="bg-[#e1e4eb] py-2 px-3 flex justify-between items-center my-8 rounded-md">
        <div>
          <p className="text-[#0d1b2a] text-2xl font-bold">
            63<span className="text-xs">kg</span>
          </p>
          <p className="text-gray-700">Weight</p>
        </div>
        <div>
          <p className="text-[#0d1b2a] text-2xl font-bold">
            5.8
          </p>
          <p className="text-gray-700">Height</p>
        </div>
        <div>
          <p className="text-[#0d1b2a] text-2xl font-bold">
            23<span className="text-xs">yrs</span>
          </p>
          <p className="text-gray-700">Age</p>
        </div>
          </div>
          
          <div className="">
              <h4 className="text-xl font-semibold text-[#0d1b2a]">Add A Break</h4>
              <div className="bg-[#e1e4eb] py-2 px-3 flex justify-between items-center my-8 rounded-md">
                  {
                      breakTimeSeconds.map(time => <p key={time} onClick={()=>handleBreakTime(time)} className="cursor-pointer bg-white p-2 rounded-full text-[#0d1b2a] font-medium">{ time}s</p>)
                  }
              </div>
          </div>

          <div>
              <h4 className="text-xl font-semibold text-[#0d1b2a]">Exercise Details</h4>
              <div className="bg-[#e1e4eb] py-3 px-3 flex justify-between items-center my-8 rounded-md">
                  <h4 className="font-semibold text-[#0d1b2a]">Exercise Time: <span className="text-gray-400 font-normal">{ time} seconds</span></h4>
              </div>
              <div className="bg-[#e1e4eb] py-2 px-3 flex justify-between items-center rounded-md">
                  <h4 className="font-semibold text-[#0d1b2a]">Break Time: <span className="text-gray-400 font-normal">{breakTime} seconds</span></h4>
              </div>
          </div>
          <button className="bg-[#0d1b2a] text-[#faf8f8] font-normal rounded-md py-3 w-full my-14">Activity Completed</button>
    </div>
  );
};

export default Activity;
