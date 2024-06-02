import { BsPlus } from "react-icons/bs";
import { AspectRatio } from "../ui/aspect-ratio";
import Rating from "./Rating";

const ProductCard = ({
  imageUrl,
  colors,
  gender,
  productName,
  price,
  promoPrice = null,
  promoFlag = null,
  averageRating,
  totalRating,
}) => {
  return (
    <div className="flex flex-col w-full h-fit gap-3 cursor-pointer">
      <AspectRatio ratio={1 / 1}>
        <img src={imageUrl} alt="" srcset="" />
      </AspectRatio>
      <div className="w-full grid grid-cols-10 gap-1 md:gap-2">
        {colors.map((val, idx) => {
          if (idx < 6) {
            return (
              <AspectRatio ratio={1 / 1}>
                <img className="rounded-sm w-full h-full object-cover" src={val.url} alt="" />
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
        <p className="font-bold text-xs md:text-sm text-gray-400">{gender.toUpperCase()}</p>
      </div>
      <p className="font-bold text-sm md:text-base mb-4 line-clamp-2">{productName}</p>
      <div className={`flex flex-col gap-1`}>
        {promoPrice ? (
          <>
            <p className={`font-extrabold text-sm md:text-base line-through`}>
              {Number(price).toLocaleString("ID-id", {
                style: "currency",
                currency: "idr",
                maximumFractionDigits: 0,
              })}
            </p>
            <p className={`font-extrabold text-xl md:text-2xl text-red-600`}>
              {Number(promoPrice).toLocaleString("ID-id", {
                style: "currency",
                currency: "idr",
                maximumFractionDigits: 0,
              })}
            </p>
          </>
        ) : (
          <p className={`font-extrabold text-xl md:text-2xl`}>
            {Number(price).toLocaleString("ID-id", {
              style: "currency",
              currency: "idr",
              maximumFractionDigits: 0,
            })}
          </p>
        )}
        {promoFlag && <p className="text-xs md:text-base font-light text-red-600">{promoFlag}</p>}
      </div>
      <div className="flex gap-2 items-center">
        <Rating value={averageRating} />
        <p>{`(${totalRating})`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
