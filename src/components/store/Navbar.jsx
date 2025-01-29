import Logo from "../../assets/logo.png";
import { BsBagHeart, BsCart, BsPerson, BsSearch } from "react-icons/bs";
import BurgerButton from "./BurgerButton";
import { HeartIcon, MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onClickBurger }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex w-full justify-between h-20 px-6 md:px-12 lg:px-36 items-center font-halve sticky top-0 bg-white border-b-2 z-[100]">
      <div className="flex items-center gap-10">
        <span
          className="w-12 h-12"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="w-full h-full" src={Logo} alt="" srcSet="" />
        </span>
        <div className="hidden md:flex justify-center gap-8 text-sm font-semibold">
          <span className="cursor-pointer border-transparent border-b-2 hover:border-black transition-all duration-300">
            MENS
          </span>
          <span className="cursor-pointer border-transparent border-b-2 hover:border-black transition-all duration-300">
            WOMAN
          </span>
          <span className="cursor-pointer border-transparent border-b-2 hover:border-black transition-all duration-300">
            KIDS
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 md:gap-8 text-sm font-semibold">
        <span className="w-6 h-6 cursor-pointer">
          <MagnifyingGlassIcon className="w-full h-full" />
        </span>
        <span className="hidden md:block w-6 h-6 cursor-pointer">
          <PersonIcon className="w-full h-full" />
        </span>
        <span className="w-6 h-6 cursor-pointer">
          <HeartIcon className="w-full h-full" />
        </span>
        <span className="w-6 h-6 cursor-pointer">
          <BsCart className="w-full h-full" />
        </span>
        <span className="md:hidden w-6 h-6 cursor-pointer">
          <BurgerButton onClick={onClickBurger} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
