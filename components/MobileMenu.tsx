import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu = (props: MobileMenuProps) => {
  const { visible } = props;
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white  hover:bg-white hover:text-black">
          Home
        </div>
        <div className="px-3 text-center text-white hover:bg-white hover:text-black">
          Series
        </div>
        <div className="px-3 text-center text-white  hover:bg-white hover:text-black">
          Films
        </div>
        <div className="px-3 text-center text-white  hover:bg-white hover:text-black">
          New & Popular
        </div>
        <div className="px-3 text-center text-white  hover:bg-white hover:text-black">
          My List
        </div>
        <div className="px-3 text-center text-white  hover:bg-white hover:text-black">
          Browse by languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
