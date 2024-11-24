import { Me } from "../Me";
import { IconList } from "./IconList";

export const ProfileMini = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-4">
      <Me />
      <IconList />
    </div>
  );
};
