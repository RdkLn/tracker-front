import React from 'react';

const Hero = () => {
  return (
    <div className="p-5 flex flex-col">
      <h1 className=" mt-3 font-extrabold text-white text-4xl text-center z-0">
        Entrenamiento <br /> de hoy
      </h1>
      <div className="flex justify-center mt-[-5px]">
        <button className="bg-indigo-900 max-w-[1024px] hover:bg-indigo-700 text-white p-3 text-sm rounded-full">
          Ir al entrenamiento de hoy {'->'}
        </button>
      </div>
    </div>
  );
};

export default Hero;
