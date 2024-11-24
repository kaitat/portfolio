import { Link } from "@/components/base";
import {
  SiGithub,
  SiGmail,
  SiQiita,
  SiX,
  SiZenn,
} from "@icons-pack/react-simple-icons";

export const IconList = () => {
  return (
    <div className="flex gap-x-4">
      <Link href="mailto:kaitat1231@gmail.com">
        <SiGmail className="w-6 h-6 text-black/100" />
      </Link>
      <Link href="https://x.com/k4170_marnie">
        <SiX className="w-6 h-6 text-black/100" />
      </Link>
      <Link href="https://github.com/kaitat">
        <SiGithub className="w-6 h-6 text-black/100" />
      </Link>
      <Link href="https://zenn.dev/kaitat1231">
        <SiZenn className="w-6 h-6 text-black/100" />
      </Link>
      <Link href="https://qiita.com/kaitat">
        <SiQiita className="w-6 h-6 text-black/100" />
      </Link>
    </div>
  );
};
