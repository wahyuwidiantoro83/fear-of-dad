import Layout from "@/components/Layout";
import Rating from "@/components/store/Rating";
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
import { BsPlus } from "react-icons/bs";
import { category, product } from "../Data";

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
          <h1 className=" text-4xl font-semibold my-4">POPULAR CATEGORIES</h1>
          <div className="w-full grid grid-cols-4 gap-4">
            {category.map((val, idx) => {
              return (
                <div className="flex flex-1 flex-col items-center gap-2">
                  <AspectRatio ratio={1 / 1}>
                    <img src={val.url} alt={val.name} />
                  </AspectRatio>
                  <p className="text-base font-light ">{val.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col mt-8 mb-10 px-6 md:px-12 lg:px-36 justify-center items-center">
          <h1 className=" text-4xl font-semibold my-4">WEEKLY RECOMMENDATION</h1>
          <div className="flex flex-col lg:flex-row w-full gap-8">
            <div className="flex w-full lg:w-[calc(30%)]">
              <div className="flex flex-col w-full h-fit gap-3">
                <AspectRatio ratio={1 / 1}>
                  <img src={product[0].images.main[0].url} alt="" srcset="" />
                </AspectRatio>
                <div className="w-full grid grid-cols-10 gap-2">
                  {product[0].images.chip.map((val, idx) => {
                    return (
                      <AspectRatio ratio={1 / 1}>
                        <img className="w-full h-full object-cover" src={val.url} alt="" />
                      </AspectRatio>
                    );
                  })}
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-sm text-gray-400">
                    {product[0].genderName.toUpperCase()}
                  </p>
                </div>
                <p className="font-bold text-base mb-4">{product[0].name}</p>
                <div className={`flex flex-col gap-1`}>
                  {product[0].prices?.promo ? (
                    <>
                      <p className={`font-extrabold text-base line-through`}>
                        {Number(product[0].prices.base.value).toLocaleString("ID-id", {
                          style: "currency",
                          currency: "idr",
                          maximumFractionDigits: 0,
                        })}
                      </p>
                      <p className={`font-extrabold text-2xl text-red-600`}>
                        {Number(product[0].prices.promo.value).toLocaleString("ID-id", {
                          style: "currency",
                          currency: "idr",
                          maximumFractionDigits: 0,
                        })}
                      </p>
                    </>
                  ) : (
                    <p className={`font-extrabold text-2xl`}>
                      {Number(product[0].prices.base.value).toLocaleString("ID-id", {
                        style: "currency",
                        currency: "idr",
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  )}
                  {product[0].representative?.flags?.priceFlags[0]?.detail && (
                    <p className="text-base font-light text-red-600">
                      {product[0].representative?.flags?.priceFlags[0]?.detail}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 items-center">
                  <Rating value={product[0].rating.average} />
                  <p>{`(${product[0].reviews.total})`}</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc(70%)] grid grid-cols-3 gap-6">
              {product.map((val, idx) => {
                return (
                  <div className={`${idx === 0 ? "hidden" : "flex flex-col"}  w-full h-fit gap-3`}>
                    <AspectRatio ratio={1 / 1}>
                      <img src={val.images.main[0].url} alt="" srcset="" />
                    </AspectRatio>
                    <div className="w-full grid grid-cols-10 gap-2">
                      {val.images.chip.map((val, idx) => {
                        if (idx < 6) {
                          return (
                            <AspectRatio ratio={1 / 1}>
                              <img className="w-full h-full object-cover" src={val.url} alt="" />
                            </AspectRatio>
                          );
                        } else if (idx === 7) {
                          return (
                            <AspectRatio ratio={1 / 1}>
                              <BsPlus className="w-full h-full fill-gray-400" />
                            </AspectRatio>
                          );
                        }
                      })}
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold text-sm text-gray-400">
                        {val.genderName.toUpperCase()}
                      </p>
                    </div>
                    <p className="font-bold text-base mb-4">{val.name}</p>
                    <div className={`flex flex-col gap-1`}>
                      {val.prices?.promo ? (
                        <>
                          <p className={`font-extrabold text-base line-through`}>
                            {Number(val.prices.base.value).toLocaleString("ID-id", {
                              style: "currency",
                              currency: "idr",
                              maximumFractionDigits: 0,
                            })}
                          </p>
                          <p className={`font-extrabold text-2xl text-red-600`}>
                            {Number(val.prices.promo.value).toLocaleString("ID-id", {
                              style: "currency",
                              currency: "idr",
                              maximumFractionDigits: 0,
                            })}
                          </p>
                        </>
                      ) : (
                        <p className={`font-extrabold text-2xl`}>
                          {Number(val.prices.base.value).toLocaleString("ID-id", {
                            style: "currency",
                            currency: "idr",
                            maximumFractionDigits: 0,
                          })}
                        </p>
                      )}
                      {val.representative?.flags?.priceFlags[0]?.detail && (
                        <p className="text-base font-light text-red-600">
                          {val.representative?.flags?.priceFlags[0]?.detail}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2 items-center">
                      <Rating value={val.rating.average} />
                      <p>{`(${val.reviews.total})`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomeView;
