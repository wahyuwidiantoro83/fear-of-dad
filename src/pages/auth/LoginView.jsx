import Logo from "../../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const LoginView = () => {
  return (
    <div className="h-svh w-full font-poppins">
      <div className="flex w-full items-center border-b border-gray-200 shadow-sm h-20 px-6 md:px-12 lg:px-36">
        <span className="w-12 h-12">
          <img className="w-full h-full" src={Logo} alt="" srcSet="" />
        </span>
      </div>
      <div className="flex w-full justify-center md:px-12 lg:px-36 py-6 md:py-12">
        <div className="flex flex-col md:flex-row border border-gray-200 w-full max-sm:divide-y md:divide-x gap-2 divide-gray-200">
          <div className="flex px-4 py-8 w-full flex-col gap-4 md:gap-6 items-start">
            <h1 className="text-4xl font-semibold">LOGIN</h1>
            <p>Login with your email address and password.</p>
            <div className="flex flex-col w-full gap-1">
              <label className="text-xl font-medium" htmlFor="">
                EMAIL ADDRESS *
              </label>
              <input
                className="bg-gray-100 border-b border-black focus:bg-white focus:border-b-2 outline-offset-4 outline-gray-400 p-4 placeholder:text-sm"
                type="text"
                placeholder="Input your email"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="text-xl font-medium" htmlFor="">
                PASSWORD *
              </label>
              <input
                className="bg-gray-100 border-b border-black focus:bg-white focus:border-b-2 outline-offset-4 outline-gray-400 p-4 placeholder:text-sm"
                type="password"
                placeholder="Input your password"
              />
              <small className="text-xs text-gray-400">
                The password must be at least 8 characters long, and consists of letters and
                numbers. Only the -_.@ symbol can be used.
              </small>
            </div>
            <div className="flex items-center gap-1">
              <Checkbox className="rounded-none" />
              <label htmlFor="">Show Password</label>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-semibold underline cursor-pointer">TERM OF USE</span>
              <span className="font-semibold underline cursor-pointer">PRIVACY POLICY</span>
            </div>
            <div className="flex w-full items-start flex-col gap-1">
              <Button className="w-full md:w-80 text-lg font-bold rounded-sm py-6" type="submit">
                LOGIN
              </Button>
              <span className="font-semibold underline cursor-pointer">FORGOT YOUR PASSWORD?</span>
            </div>
          </div>
          <div className="flex px-4 py-8 w-full flex-col gap-4">
            <h1 className="text-4xl font-semibold">BUAT AKUN</h1>
            <p>
              If you create an account, you can get personalized services such as viewing your
              purchase history and getting discount coupons with your membership. Sign up today,
              it's free!
            </p>
            <Button className="w-full md:w-80 mt-4 text-lg font-bold rounded-sm py-6" type="submit">
              BUAT AKUN
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-full pb-4 justify-center">
        <p className=" uppercase text-sm font-semibold text-center">
          FEAR OF DAD ©️ {new Date().getFullYear()} BY WAHYU WIDIANTORO (FOR LEARNING PURPOSE ONLY)
        </p>
      </div>
    </div>
  );
};

export default LoginView;
