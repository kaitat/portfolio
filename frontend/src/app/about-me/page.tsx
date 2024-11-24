import { ProfileMini } from "@/components/ProfileMini";
import { Skill } from "@/components/Skill";
import { TypographyH1 } from "@/components/base";
import type { NextPage } from "next";
import { Introduction } from "./_components/Introduction";

const Page: NextPage = () => {
  return (
    <main className="max-w-2xl mx-auto mt-24 gap-y-24 flex flex-col">
      <ProfileMini />
      <div className="flex flex-col gap-y-24">
        <TypographyH1>About me</TypographyH1>
        <Introduction />
        <Skill isShort={true} />
      </div>
    </main>
  );
};
export default Page;
