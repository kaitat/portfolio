import { SkillCard } from "../SkillCard";
import type { SKILL_LIST } from "./skill-list";

export const SkillCardList = ({
  skill,
}: { skill: (typeof SKILL_LIST)[number]["skill"] }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {skill.map(({ name, iconType, rate }) => {
        return (
          <SkillCard key={name} iconType={iconType} name={name} rate={rate} />
        );
      })}
    </div>
  );
};
