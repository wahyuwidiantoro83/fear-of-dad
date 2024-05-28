import Layout from "@/components/Layout";
import Logo from "../../assets/logo.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SignOutButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsPlus, BsTwitter } from "react-icons/bs";
import { category, product } from "../Data";
import ProductCard from "@/components/store/ProductCard";
import { Input } from "@/components/ui/input";

const HomeView = () => {
  useEffect(() => {
    document.title = "FEAR OF DAD | Embrace Your Lightness";
  }, []);

  return (
    <>
      <Layout>
        <Carousel className=" w-full h-hero">
          <CarouselContent>
            <CarouselItem>
              <div className="flex w-full h-full">
                <img
                  className="hidden lg:block w-full lg:w-[calc(70%)] h-full object-cover"
                  src="https://im.uniqlo.com/global-cms/spa/res754eaaeedb4f4786bda65ac35fb3f20dfr.jpg"
                  alt=""
                  srcSet=""
                />
                <img
                  className="w-full lg:hidden h-full object-cover"
                  src="https://im.uniqlo.com/global-cms/spa/res079812de0580f9d3b9418b3b5e9ca8f6fr.jpg"
                  alt=""
                  srcSet=""
                />
                <div className="hidden lg:flex lg:w-[calc(40%)] h-full items-center">
                  <div className="flex flex-col gap-5 ml-6">
                    <h1 className="text-3xl font-semibold ">40th Anniversary FOD</h1>
                    <p className=" w-[80%] text-xl font-normal">
                      Nikmati keseruan Arigato Indonesia dan nikmati penawaran spesialnya.
                    </p>
                    <Button className="px-8 py-6 w-fit  font-semibold" variant={"outline"}>
                      SELENGKAPNYA
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex w-full h-full">
                <img
                  className="hidden lg:block w-full lg:w-[calc(70%)] h-full object-cover"
                  src="https://im.uniqlo.com/global-cms/spa/resffa3e6b0c60899c02d0e1aa1d780f380fr.jpg"
                  alt=""
                  srcSet=""
                />
                <img
                  className="w-full lg:hidden h-full object-cover"
                  src="https://im.uniqlo.com/global-cms/spa/resfaa300069bc285f30eb0b426c7ae7080fr.jpg"
                  alt=""
                  srcSet=""
                />
                <div className="hidden lg:flex lg:w-[calc(40%)] h-full items-center">
                  <div className="flex flex-col gap-5 ml-6">
                    <h1 className="text-3xl font-semibold ">Mandiri Cashback</h1>
                    <p className=" w-[80%] text-xl font-normal">
                      Bagi pengguna Kartu Mandiri Kredit atau Mandiri Debit. Periode 23 Mei - 30
                      Juni 2024.
                    </p>
                    <Button className="px-8 py-6 w-fit  font-semibold" variant={"outline"}>
                      SELENGKAPNYA
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex w-full h-full">
                <img
                  className="hidden lg:block w-full lg:w-[calc(70%)] h-full object-cover"
                  src="https://im.uniqlo.com/global-cms/spa/resad8c17f926fc3696d7ce7ff95f160d19fr.jpg"
                  alt=""
                  srcSet=""
                />
                <img
                  className="w-full lg:hidden h-full object-cover"
                  src="https://im.uniqlo.com/global-cms/spa/res5371a353960c826d167d509cf47d0429fr.jpg"
                  alt=""
                  srcSet=""
                />
                <div className="hidden lg:flex lg:w-[calc(40%)] h-full items-center">
                  <div className="flex flex-col gap-5 ml-6">
                    <h1 className="text-3xl w-[80%] font-semibold ">
                      Untuk pengguna baru Aplikasi FOD
                    </h1>
                    <p className=" w-[80%] text-xl font-normal">
                      Selama persediaan masih ada. Promo mulai dari 23 May 2024
                    </p>
                    <Button className="px-8 py-6 w-fit  font-semibold" variant={"outline"}>
                      SELENGKAPNYA
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-8" />
          <CarouselNext className="right-8" />
        </Carousel>
        <div className="flex flex-col mt-8 mb-10 px-6 md:px-12 lg:px-36 justify-center items-center">
          <h1 className=" text-4xl font-semibold my-6">POPULAR CATEGORIES</h1>
          <div className="w-full grid grid-cols-4 gap-4">
            {category.map((val, idx) => {
              return (
                <div className="flex flex-1 flex-col items-center gap-2">
                  <AspectRatio ratio={1 / 1}>
                    <img src={val.url} alt={val.name} />
                  </AspectRatio>
                  <p className="text-sm md:text-base text-center font-light line-clamp-2">
                    {val.name}
                  </p>
                </div>
              );
            })}
          </div>
          <Button variant="outline" className="w-full py-6 text-xl border-2 my-6">
            SELENGKAPNYA
          </Button>
        </div>
        <div className="flex flex-col mt-8 mb-10 px-6 md:px-12 lg:px-36 justify-center items-center">
          <AspectRatio ratio={19 / 4}>
            <img
              className="w-full h-full object-cover"
              src="https://im.uniqlo.com/global-cms/spa/res461b4956e92a04cb7cb4201e0faea029fr.jpg"
              alt=""
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col mt-8 mb-10 px-6 md:px-12 lg:px-36 justify-center items-center">
          <h1 className=" text-4xl font-semibold my-6">WEEKLY RECOMMENDATION</h1>
          <div className="flex flex-col lg:flex-row w-full gap-8">
            <div className="flex w-full lg:w-[calc(30%)]">
              <ProductCard
                imageUrl={product[0].images.main[0].url}
                colors={product[0].images.chip}
                gender={product[0].genderName}
                productName={product[0].name}
                price={product[0].prices?.base?.value}
                promoPrice={product[0].prices?.promo?.value}
                promoFlag={product[0].representative?.flags?.priceFlags[0]?.detail}
                averageRating={product[0].rating.average}
                totalRating={product[0].reviews.total}
              />
            </div>
            <div className="w-full lg:w-[calc(70%)] grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {product.map((val, idx) => {
                return (
                  <>
                    <ProductCard
                      imageUrl={val.images.main[0].url}
                      colors={val.images.chip}
                      gender={val.genderName}
                      productName={val.name}
                      price={val.prices?.base?.value}
                      promoPrice={val.prices?.promo?.value}
                      promoFlag={val.representative?.flags?.priceFlags[0]?.detail}
                      averageRating={val.rating.average}
                      totalRating={val.reviews.total}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <Button variant="outline" className="w-full py-6 text-base md:text-xl border-2 my-6">
            SELENGKAPNYA
          </Button>
        </div>
        <div className="flex flex-col mt-8 mb-10 px-6 md:px-12 lg:px-36 justify-center items-center">
          <AspectRatio ratio={19 / 4}>
            <img
              className="w-full h-full object-cover"
              src="https://im.uniqlo.com/global-cms/spa/res67a82eb57f97b9f4636bf16a65a00c16fr.jpg"
              alt=""
            />
          </AspectRatio>
        </div>
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
                <BsTwitter className="w-full h-full group-hover:fill-white transition-all duration-300" />
              </span>
              <span className="w-16 h-16 p-3 border-2 group hover:bg-black border-black transition-all duration-300 cursor-pointer rounded-sm">
                <BsInstagram className="w-full h-full group-hover:fill-white transition-all duration-300" />
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
            FEAR OF DAD ©️ {new Date().getFullYear()} BY WAHYU WIDIANTORO (FOR LEARNING PURPOSE
            ONLY)
          </span>
        </div>
      </Layout>
    </>
  );
};

export default HomeView;
