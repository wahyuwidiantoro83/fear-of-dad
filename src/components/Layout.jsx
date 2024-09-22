import { useState } from "react";
import Navbar from "./store/Navbar";
import Footer from "./store/Footer";

const Layout = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="h-dvh w-dvw overflow-auto font-poppins">
        <Navbar onClickBurger={() => setOpenModal(!openModal)} />
        <div
          className={`w-full flex h-hero fixed  ${
            openModal ? "top-20" : "-top-full"
          } left-0 right-0 bg-white z-[99] transition-all ease-in-out duration-700`}
        >
          <div className="flex w-full h-full">Halo</div>
        </div>
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
