import { Skill } from "@/components/Skill";
import { TypographyH1 } from "@/components/base";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main className="max-w-2xl mx-auto mt-24 gap-y-24 flex flex-col">
      <div className="flex flex-col gap-y-24">
        <TypographyH1>My Skill</TypographyH1>
        <Skill isShort={false} />
      </div>
    </main>
  );
};
export default Page;
