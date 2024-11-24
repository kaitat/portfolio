import { TypographyH2, TypographyH3 } from "@/components/base";
import Link from "next/link";
import { SkillCardList } from "./SkillCardList";
import { SKILL_LIST } from "./skill-list";

export const Skill = ({ isShort }: { isShort: boolean }) => {
  return (
    <div className="flex flex-col">
      <TypographyH2>My Skill</TypographyH2>
      {SKILL_LIST.map(({ title, skill, short }) => {
        if (isShort && !short) return null;
        return (
          <div key={title} className="flex flex-col gap-y-4">
            <TypographyH3>{title}</TypographyH3>
            <SkillCardList skill={skill} />
          </div>
        );
      })}
      <p className="text-3xs font-light text-surface-inverse/80">
        「1: 軽く触れたことがある」「2: 実務で使ったことがある」「3:
        サポートを受けながら使用できる」「4:
        業務で自由に使用することができる」「5: 人に教えることができる」
      </p>
      {isShort && (
        <div className="flex justify-center items-center">
          <Link
            href="/my-skill"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2"
          >
            詳細をみる
          </Link>
        </div>
      )}
    </div>
  );
};
