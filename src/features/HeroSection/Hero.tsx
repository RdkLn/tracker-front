import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="p-5 flex flex-col">
      <h1 className=" mt-3 font-extrabold text-white text-4xl text-center z-0">
        Entrenamiento <br /> de hoy
      </h1>
      <div className="flex justify-center mt-[-5px]">
        <Link
          to={'/Workout'}
          className="bg-indigo-900 hover:bg-indigo-700 text-white p-3 text-sm rounded-full"
        >
          Ir al entrenamiento de hoy {'->'}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
