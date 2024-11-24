import { ProfileMini } from "@/components/ProfileMini";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main>
      <div className="w-full h-[80vh] flex items-center justify-center flex-col gap-y-4">
        <ProfileMini />
        <p className="text-md font-bold">My Portfolio</p>
      </div>
    </main>
  );
};

export default Page;
