import { BsFacebook, BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs";
import Logo from "../../assets/logo.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-8 px-6 md:px-12 lg:px-36 justify-between border-t-2">
        <div className="flex py-4 gap-2 md:py-6 lg:py-8 md:pr-2">
          <img className="w-16 h-16" src={Logo} alt="" />
        </div>
        <div className="flex flex-col w-full lg:w-[calc(35%)] py-4 md:py-6 lg:py-8">
          <div className="flex flex-col gap-4 mb-10">
            <p className=" text-2xl font-semibold">SUBSCRIBE NEWSLETTER</p>
            <div className="flex w-full md:w-[80%] gap-2 items-center">
              <Input className=" rounded-sm py-6" type="email" placeholder="Email" />
              <Button className=" rounded-sm py-6" type="submit">
                SUBSCRIBE
              </Button>
            </div>
            <small className=" font-light w-full md:w-[80%]">
              Daftar dan jadilah yang pertama mengetahui tentang pendatang baru, promosi, acara di
              dalam toko, dan banyak lagi.
            </small>
          </div>
          <div className="flex gap-2">
            <span className=" w-16 h-16 p-3 border-2 group hover:bg-black border-black transition-all duration-300 cursor-pointer rounded-sm">
              <BsInstagram className="w-full h-full group-hover:fill-white transition-all duration-300" />
            </span>
            <span className="w-16 h-16 p-3 border-2 group hover:bg-black border-black transition-all duration-300 cursor-pointer rounded-sm">
              <BsFacebook className="w-full h-full group-hover:fill-white transition-all duration-300" />
            </span>
            <span className="w-16 h-16 p-3 border-2 group hover:bg-black border-black transition-all duration-300 cursor-pointer rounded-sm">
              <BsTwitterX className="w-full h-full group-hover:fill-white transition-all duration-300" />
            </span>
            <span className="w-16 h-16 p-3 border-2 group hover:bg-black border-black transition-all duration-300 cursor-pointer rounded-sm">
              <BsTiktok className="w-full h-full group-hover:fill-white transition-all duration-300" />
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 md:gap-0 md:flex-row lg:w-[calc(55%)] justify-between py-4 md:py-6 lg:py-8">
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-2xl font-semibold">FOD</p>
            <ul className="flex flex-col gap-3">
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                About Us
              </li>
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                Term & Conditions
              </li>
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                Topics
              </li>
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                Special Offers
              </li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-2xl font-semibold">SUPPORT</p>
            <ul className="flex flex-col gap-3">
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                FAQ
              </li>
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                Privacy Policy
              </li>
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                Return Policy
              </li>
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                Accesibility
              </li>
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-2xl font-semibold">ACCOUNT</p>
            <ul className="flex flex-col gap-3">
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                Profile
              </li>
              <li className="hover:underline transition-all duration-300 cursor-pointer underline-offset-2">
                Vouchers
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex px-6 md:px-12 lg:px-36 border-t-2 py-6">
        <span>
          FEAR OF DAD ©️ {new Date().getFullYear()} BY WAHYU WIDIANTORO (FOR LEARNING PURPOSE ONLY)
        </span>
      </div>
    </>
  );
};

export default Footer;
