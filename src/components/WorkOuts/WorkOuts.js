import React, { useEffect, useState } from "react";
import { CgGym } from "react-icons/cg";
import Activity from "../Activity/Activity";
import WorkOut from "../WorkOut/WorkOut";

const WorkOuts = () => {
    const [workOuts, setWorkOuts] = useState([]);
    const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setWorkOuts(data));
  }, []);
    
    // let exerciseTime = 0;
    const handleAddTime = (workout) => {
        setTime(time + workout.time)
    }
    
  return (
    <div className="pt-20">
      <div className="w-[80%] mx-auto">
        <div className="flex items-center space-x-4">
          <CgGym size={35} color="#0d1b2a" />
          <h3 className="text-4xl font-semibold uppercase text-[#0d1b2a]">
            Body Evolution
          </h3>
        </div>
        <h4 className="text-2xl font-medium text-gray-700 pt-8">
          Choos Todays's Exercise
        </h4>
      </div>

      <div className="grid lg:grid-cols-[4fr_1fr] md:grid-cols-1">
        <div className="lg:w-[80%] md:w-[70%] lg:mx-auto md:mx-auto grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-y-8 my-10">
          {workOuts.map((workout) => (
              <WorkOut key={workout.id} workout={workout} handleAddTime={ handleAddTime} />
          ))}
        </div>
        <div className="bg-white lg:w-80 md:w-[80%] mx-auto">
              <Activity time={time} />
        </div>
      </div>
    </div>
  );
};

export default WorkOuts;
