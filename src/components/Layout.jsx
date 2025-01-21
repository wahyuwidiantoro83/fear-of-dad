import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          <div className="flex w-full h-full">
            <Tabs defaultValue="man" className="w-full">
              <TabsList className="flex w-full justify-evenly py-0">
                <TabsTrigger className="w-full rounded-none" value="man">
                  MAN
                </TabsTrigger>
                <TabsTrigger className="w-full rounded-none" value="woman">
                  WOMAN
                </TabsTrigger>
                <TabsTrigger className="w-full rounded-none" value="kids">
                  KIDS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="man">Make changes to your account here.</TabsContent>
              <TabsContent value="woman">Change your password here.</TabsContent>
            </Tabs>
          </div>
        </div>
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
