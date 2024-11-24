import { Icon } from "@/components/base";
import { twMerge } from "tailwind-merge";

export const Rating = ({ rate }: { rate: number }) => {
  return (
    <div className="flex gap-x-2">
      {[1, 2, 3, 4, 5].map((item) => {
        const isActive = item <= rate;
        return (
          <Icon
            type="star"
            key={item}
            className={twMerge(
              "w-6 h-6 fill-current",
              isActive ? "text-yellow-400" : "text-gray-200",
            )}
          />
        );
      })}
    </div>
  );
};
