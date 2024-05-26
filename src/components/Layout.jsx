import Navbar from "./store/Navbar";

const Layout = (props) => {
  return (
    <>
      <div className="h-dvh w-dvw overflow-auto font-poppins">
        <Navbar />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
