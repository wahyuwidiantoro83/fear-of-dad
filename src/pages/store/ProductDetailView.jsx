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
import { useEffect, useState } from "react";
import { product } from "../Data";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Rating from "@/components/store/Rating";
import { Button } from "@/components/ui/button";

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
        <div className="flex mt-8 mb-10 px-6 md:px-12 lg:px-36">
          <div className="flex w-[55%] flex-col">
            <div className="flex gap-3">
              <div className="grid w-[20%] h-fit grid-cols-2 gap-2">
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
            </div>
          </div>
          <div className="flex w-[45%] flex-col pl-16 gap-6">
            <h1 className="text-3xl font-bold">{product[0].name}</h1>
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
            <div className="w-full h-0.5 rounded-sm bg-gray-400"></div>
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
              <small className="text-xs text-gray-400">In Stock</small>
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
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetailView;
