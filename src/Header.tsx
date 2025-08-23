import React from 'react';
import DrawerSvg from './assets/drawer.svg?react';

const Header = () => {
  return (
    <div className="bg-[#3e3e3e]">
      <nav className="mx-auto  p-3 flex items-center justify-between lg:px-8">
        <div className="size-5 ">
          <DrawerSvg className="stroke-white "></DrawerSvg>
        </div>
        <h1 className="w-5/10 text-lg text-center text-white font-bold">Header</h1>
        <div></div>
      </nav>
    </div>
  );
};

export default Header;
