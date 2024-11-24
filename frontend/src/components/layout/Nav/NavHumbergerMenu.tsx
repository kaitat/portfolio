import Link from "next/link";
import { linkList } from "./link-list";

export const NavHumbergerMenu = () => {
  return (
    <ul className="mt-0 lg:flex flex-row space-x-8 text-xs font-normal hidden items-center">
      {linkList.map(({ href, text }) => (
        <li key={text}>
          <Link href={href} className="text-gray-900 hover:underline">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
