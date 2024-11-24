import { Icon, type IconType } from "@/components/base";
import { Rating } from "@/components/shared/Rating";

type Props = {
  iconType: IconType;
  rate: number;
  name: string;
};

export const SkillCard = ({ iconType, rate, name }: Props) => {
  return (
    <div className="col-span-1  px-2 py-4 flex flex-col justify-center items-center gap-y-4">
      <Icon type={iconType} />
      <div className="flex flex-col justify-center items-center gap-y-1">
        <p className="font-bold text-md">{name}</p>
        <Rating rate={rate} />
      </div>
    </div>
  );
};
