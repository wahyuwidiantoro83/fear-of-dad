import Layout from "@/components/Layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { product, reviews } from "../Data";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Rating from "@/components/store/Rating";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BsCopy, BsFacebook, BsTwitterX } from "react-icons/bs";

const test = [1, 2, 3, 4, 5, 6];

const ProductDetailView = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Layout>
        <div className="flex flex-col mt-8 mb-10 px-6 md:px-12 lg:px-36">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">FEAR OF DEAD</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/mens">MENS</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/atasan">OUTER</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product[0].name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col md:flex-row mt-8 mb-10 px-6 md:px-12 lg:px-36">
          <div className="flex md:w-[55%] flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="hidden md:grid w-[20%] h-fit grid-cols-2 gap-2">
                {product[0].images.sub.map((val, idx) => {
                  return (
                    <img
                      onClick={() => api.scrollTo(idx)}
                      key={idx}
                      className={`w-full p-0.5 aspect-square object-cover cursor-pointer hover:border-2 border-black ${
                        idx === current && "border-2 border-black"
                      } `}
                      src={val.url}
                      alt=""
                    />
                  );
                })}
              </div>
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                }}
                setApi={setApi}
              >
                <CarouselContent>
                  {product[0].images.sub.map((val, idx) => {
                    return (
                      <CarouselItem>
                        <img className="w-full aspect-square object-cover" src={val.url} alt="" />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselNext className="right-5" />
                <CarouselPrevious className="left-5" />
              </Carousel>
              <div className="flex md:hidden gap-2 mb-6 justify-center">
                {product[0].images.sub.map((val, idx) => {
                  return (
                    <span
                      onClick={() => api.scrollTo(idx)}
                      key={idx}
                      className={`rounded-full w-1.5 h-1.5 ${
                        idx === current ? "bg-black" : "bg-gray-400"
                      }`}
                    ></span>
                  );
                })}
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-6 mt-6">
              <div className="w-full">
                <Accordion type="single" defaultValue="item-1" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold">DESKRIPSI</AccordionTrigger>
                    <AccordionContent className="p-2">
                      - Bahan katun rayon yang lembut. - Cardigan serbaguna yang wajib dimiliki. -
                      Dilengkapi teknologi UV Protection. - Dapat dicuci dengan mesin. *Kami
                      merekomendasikan untuk mencuci produk ini dengan kondisi terbalik dalam
                      laundry net tipe mesh. *Setelah dicuci, bentangkan dalam bentuk aslinya untuk
                      mengeringkan. - Diperbarui dengan ukuran yang lebih pendek agar cocok
                      dipadukan dengan bawahan apa pun. - Dapat dikenakan sebagai pullover. - Desain
                      garis yang stylish. - Cocok dipakai di ruangan ber-AC. - UPF25.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-semibold">ULASAN</p>
                <div className="flex gap-2 items-baseline">
                  <Rating value={product[0].rating.average} />
                  <p>{`(${product[0].rating.count})`}</p>
                </div>
              </div>
              <Separator />
              <div className="div">
                <p className="text-base font-semibold">{product[0].rating.count} Reviews</p>
              </div>
              <Separator />
              <div className="flex flex-col gap-2">
                {reviews.map((val, idx) => {
                  let createDate = new Date(val.createDate * 1000);
                  return (
                    <div key={idx} className="flex flex-col gap-3 mb-3">
                      <div className="flex justify-between items-center">
                        <p className="text-xl w-[70%] font-semibold">{val.title.toUpperCase()}</p>
                        <p className="text-sm font-normal text-gray-400">
                          {createDate.toLocaleDateString("id-ID")}
                        </p>
                      </div>
                      <Rating value={val.rate} />
                      <p className="text-sm">Size : {val.purchasedSize}</p>
                      <p className="text-sm">{val.comment}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{val.name}</span>
                        <span className="text-sm text-gray-400">-</span>
                        <span className="text-sm text-gray-400">{val.gender.name}</span>
                        <span className="text-sm text-gray-400">-</span>
                        <span className="text-sm text-gray-400">{val.location}</span>
                      </div>
                      <Separator />
                    </div>
                  );
                })}
                <Button
                  variant="outline"
                  className="py-6 border-2 border-black rounded-none font-semibold"
                >
                  VIEW MORE
                </Button>
                <Button
                  variant="outline"
                  className="py-6 border-2 border-black rounded-none font-semibold"
                >
                  WRITE REVIEW
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:w-[45%] md:sticky md:top-[6rem] h-fit flex-col md:pl-16 gap-6">
            <h1 className="text-xl md:text-3xl font-bold">{product[0].name}</h1>
            <div className="flex justify-between">
              <div className={`flex flex-col`}>
                {product[0].prices?.promo ? (
                  <>
                    <p className={`font-extrabold text-sm md:text-lg line-through`}>
                      {Number(product[0].prices.base.value).toLocaleString("ID-id", {
                        style: "currency",
                        currency: "idr",
                        maximumFractionDigits: 0,
                      })}
                    </p>
                    <p className={`font-extrabold text-xl md:text-3xl text-red-600`}>
                      {Number(product[0].prices.promo.value).toLocaleString("ID-id", {
                        style: "currency",
                        currency: "idr",
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </>
                ) : (
                  <p className={`font-extrabold text-xl md:text-2xl`}>
                    {Number(product[0].prices.base.value).toLocaleString("ID-id", {
                      style: "currency",
                      currency: "idr",
                      maximumFractionDigits: 0,
                    })}
                  </p>
                )}
                {product[0].representative?.flags?.priceFlags[0]?.detail && (
                  <p className="text-xs md:text-base font-light text-red-600">
                    {product[0].representative?.flags?.priceFlags[0]?.detail}
                  </p>
                )}
              </div>
              <div className="flex gap-2 items-baseline">
                <Rating value={product[0].rating.average} />
                <p>{`(${product[0].rating.count})`}</p>
              </div>
            </div>
            <Separator className="h-0.5 bg-gray-400 md:mt-6" />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm">COLOR: BLUE</p>
              <div className="grid grid-cols-8 w-full gap-2">
                {product[0].images.chip.map((val, idx) => {
                  return (
                    <div className="w-full aspect-square border-2 cursor-pointer hover:border-black p-0.5">
                      <img className="w-full h-full object-cover" src={val.url} alt="" srcset="" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm">SIZE: XS</p>
              <div className="grid grid-cols-8 w-full gap-2">
                {product[0].sizes.map((val, idx) => {
                  return (
                    <div className="w-full aspect-square border-2 border-black p-0.5 group cursor-pointer">
                      <span className="w-full h-full flex justify-center items-center group-hover:bg-black group-hover:text-white">
                        {val.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm">QUANTITY</p>
              <Select>
                <SelectTrigger className="w-32 rounded-none border-2 focus:ring-0 h-12 border-black">
                  <SelectValue placeholder="Quantity" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-2 border-black">
                  {new Array(10).fill().map((val, idx) => {
                    return <SelectItem value={idx + 1}>{idx + 1}</SelectItem>;
                  })}
                </SelectContent>
              </Select>
              <small className="text-sm text-gray-400">In Stock</small>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="py-6 rounded-none font-semibold">ADD TO CART</Button>
              <Button
                variant="outline"
                className="py-6 border-2 border-black rounded-none font-semibold"
              >
                ADD TO WISHLIST
              </Button>
            </div>
            <Separator className="h-0.5 bg-gray-400" />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm">SHARE</p>
              <div className="grid grid-cols-8 w-full gap-2">
                <div className="w-full aspect-square border-2 p-2 border-black group hover:bg-black cursor-pointer transition-all duration-300">
                  <BsFacebook className="w-full h-full group-hover:text-white transition-all duration-300" />
                </div>
                <div className="w-full aspect-square border-2 p-2 border-black group hover:bg-black cursor-pointer transition-all duration-300">
                  <BsTwitterX className="w-full h-full group-hover:text-white transition-all duration-300" />
                </div>
                <div className="w-full aspect-square border-2 p-3 border-black group hover:bg-black cursor-pointer transition-all duration-300">
                  <BsCopy className="w-full h-full group-hover:text-white transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden flex-col gap-2 mt-6">
            {reviews.map((val, idx) => {
              let createDate = new Date(val.createDate * 1000);
              return (
                <div key={idx} className="flex flex-col gap-3 mb-3">
                  <div className="flex justify-between items-center">
                    <p className="text-xl w-[70%] font-semibold">{val.title.toUpperCase()}</p>
                    <p className="text-sm font-normal text-gray-400">
                      {createDate.toLocaleDateString("id-ID")}
                    </p>
                  </div>
                  <Rating value={val.rate} />
                  <p className="text-sm">Size : {val.purchasedSize}</p>
                  <p className="text-sm">{val.comment}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{val.name}</span>
                    <span className="text-sm text-gray-400">-</span>
                    <span className="text-sm text-gray-400">{val.gender.name}</span>
                    <span className="text-sm text-gray-400">-</span>
                    <span className="text-sm text-gray-400">{val.location}</span>
                  </div>
                  <Separator />
                </div>
              );
            })}
            <Button
              variant="outline"
              className="py-6 border-2 border-black rounded-none font-semibold"
            >
              VIEW MORE
            </Button>
            <Button
              variant="outline"
              className="py-6 border-2 border-black rounded-none font-semibold"
            >
              WRITE REVIEW
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetailView;
