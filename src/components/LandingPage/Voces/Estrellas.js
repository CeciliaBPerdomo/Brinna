import { Star as StarIcon } from "lucide-react";

const Star = ({ filled }) => {
  return (
    <StarIcon
      className={`w-5 h-5 sm:w-6 sm:h-6 ${filled ? "text-[#FF7968]" : "text-[#D1C4C5]"}`}
      fill={filled ? "#FF7968" : "none"}
      strokeWidth={1.5}
    />
  );
};

export default Star;
