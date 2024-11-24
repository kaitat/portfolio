import { Icon } from "@/components/base";
import { Menu } from "@ark-ui/react";
import Link from "next/link";
import { linkList } from "./link-list";

export const NavMenu = () => {
  return (
    <Menu.Root positioning={{ overflowPadding: 0 }}>
      <Menu.Trigger>
        <Menu.Indicator className="data-[state=open]:hidden lg:hidden">
          <Icon type="menu" />
        </Menu.Indicator>
        <Menu.Indicator className="data-[state=closed]:hidden">
          <Icon type="close" />
        </Menu.Indicator>
      </Menu.Trigger>
      <Menu.Positioner className="w-full mt-4 bg-white">
        <Menu.Content className='h-[calc(100svh-3.375rem)] data-[state="closed"]:animate-slide-out data-[state="open"]:animate-slide-in'>
          <div className="h-full overflow-y-auto bg-white outline-none">
            {linkList.map(({ href, text }) => (
              <Menu.Item
                className="bg-white text-base font-bold text-text-high/text-high hover:bg-surface cursor-pointer"
                value={text}
                key={text}
              >
                <Link
                  href={href}
                  className="text-gray-900 hover:underline w-full h-full py-4 pl-4 pr-8 flex justify-between"
                >
                  {text}
                  <span>{" >"}</span>
                </Link>
              </Menu.Item>
            ))}
          </div>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
