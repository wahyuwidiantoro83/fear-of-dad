import Footer from "@/components/store/Footer";
import Logo from "../../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RegisterView = () => {
  return (
    <>
      <div className="font-poppins">
        <div className="flex w-full items-center border-b border-gray-200 shadow-sm h-20 px-6 md:px-12 lg:px-36">
          <span className="w-12 h-12">
            <img className="w-full h-full" src={Logo} alt="" srcSet="" />
          </span>
        </div>
        <div className="flex flex-col mt-8 mb-10 px-6 md:px-12 lg:px-36">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">FEAR OF DEAD</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/mens">Register</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex w-full md:px-12 lg:px-36 mb-16">
          <div className="flex w-full md:max-w-[70%] border border-gray-200 px-4 py-8 flex-col gap-4 md:gap-6 items-start">
            <h1 className="text-2xl md:text-4xl font-semibold uppercase">
              Create an Account
            </h1>
            <p className="text-sm md:text-base">
              Anda akan menerima email konfirmasi ke alamat e-mail Anda yang
              terkait dengan akun. Harap pastikan untuk memeriksa e-mail yang
              masuk dari UNIQLO.
            </p>
            <div className="flex flex-col w-full gap-1">
              <label className="text-lg md:text-xl font-medium" htmlFor="">
                EMAIL ADDRESS *
              </label>
              <input
                className="bg-gray-100 border-b border-black focus:bg-white focus:border-b-2 outline-offset-4 outline-gray-400 p-4 placeholder:text-sm"
                type="text"
                name="email"
                placeholder="Input your email"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="text-lg md:text-xl font-medium" htmlFor="">
                PASSWORD *
              </label>
              <input
                className="bg-gray-100 border-b border-black focus:bg-white focus:border-b-2 outline-offset-4 outline-gray-400 p-4 placeholder:text-sm"
                type="password"
                name="password"
                placeholder="Input your password"
              />
              <small className="text-xs text-gray-400">
                The password must be at least 8 characters long, and consists of
                letters and numbers. Only the -_.@ symbol can be used.
              </small>
            </div>
            <div className="flex items-center gap-1">
              <Checkbox className="rounded-none" />
              <label htmlFor="">Show Password</label>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="text-lg md:text-xl font-medium" htmlFor="">
                POSTAL CODE *
              </label>
              <input
                className="bg-gray-100 border-b border-black focus:bg-white focus:border-b-2 outline-offset-4 outline-gray-400 p-4 placeholder:text-sm"
                type="text"
                name="postal"
                placeholder="Input your postal code"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="text-lg md:text-xl font-medium" htmlFor="">
                BIRTH DATE *
              </label>
              <input
                className="bg-gray-100 w-full md:max-w-96 border-b border-black focus:bg-white focus:border-b-2 outline-offset-4 outline-gray-400 p-4 placeholder:text-sm"
                type="date"
                name="birth_date"
                placeholder="Input birth date"
              />
              <small className="text-xs text-gray-400">
                Unable to edit birthday after you register.
              </small>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label
                className="text-lg md:text-xl font-medium uppercase"
                htmlFor=""
              >
                Gender
              </label>
              <RadioGroup className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <label htmlFor="female">Female</label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="text-lg md:text-xl font-medium" htmlFor="">
                CONFIRM SUBSCRIPTION
              </label>
              <div className="flex items-center gap-1">
                <Checkbox className="rounded-none" />
                <label htmlFor="">FOD Newsletter</label>
              </div>
            </div>
            <div className="h-0.5 bg-gray-200 w-full"></div>
            <span className="text-lg md:text-xl font-medium uppercase">
              Membership Agreement *
            </span>
            <p className="text-sm md:text-base text-muted-foreground">
              By creating an account, you agree to UNIQLO’s privacy policy and
              terms of use.
            </p>
            <div className="flex items-center gap-1">
              <Checkbox className="rounded-none" />
              <label htmlFor="">
                I agree to the UNIQLO’s TERMS OF USE and PRIVACY POLICY
              </label>
            </div>
            <div className="flex items-start gap-4 mb-2">
              <span className="font-semibold underline cursor-pointer">
                TERM OF USE
              </span>
              <span className="font-semibold underline cursor-pointer">
                PRIVACY POLICY
              </span>
            </div>
            <div className="flex w-full items-start flex-col gap-1">
              <Button
                className="w-full md:w-80 md:text-lg font-bold rounded-sm py-6"
                type="submit"
              >
                CREATE ACCOUNT
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RegisterView;
