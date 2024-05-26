import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({ value = 4.2, starCount = 5 }) => {
  return (
    <div className="flex gap-1">
      {new Array(starCount).fill().map((_, idx) => {
        let currenStar = value - idx;
        if (currenStar >= 1) {
          return <BsStarFill key={idx} className="w-4 h-4 fill-yellow-300" />;
        } else if (0 < currenStar && currenStar < 1) {
          return <BsStarHalf key={idx} className="w-4 h-4 fill-yellow-300" />;
        } else {
          return <BsStar key={idx} className="w-4 h-4 fill-yellow-300" />;
        }
      })}
    </div>
  );
};

export default Rating;
