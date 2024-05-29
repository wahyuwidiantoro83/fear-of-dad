import { useState } from "react";

const BurgerButton = ({ onClick }) => {
  const [click, setClick] = useState(false);
  return (
    <div
      className={`w-full h-full flex flex-col justify-center gap-1.5 cursor-pointer`}
      onClick={() => {
        onClick();
        setClick(!click);
      }}
    >
      <span
        className={`w-full h-0.5 ${
          click ? "translate-y-2 rotate-45" : ""
        }  bg-black rounded-full transition-all duration-500`}
      ></span>
      <span
        className={`${
          click ? " bg-transparent" : "bg-black"
        } w-full transition-all duration-500 h-0.5 rounded-full`}
      ></span>
      <span
        className={`w-full h-0.5 ${
          click ? "-translate-y-2 -rotate-45" : ""
        } transition-all duration-500  bg-black rounded-full`}
      ></span>
    </div>
  );
};

export default BurgerButton;
