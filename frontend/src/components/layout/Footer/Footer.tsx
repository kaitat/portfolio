import { SITE_TITLE } from "@/constants/env";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto max-w-4xl bg-white mt-8">
      <hr className="my-4 border-gray-200 sm:mx-auto" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-xl font-semibold ">
                {SITE_TITLE}
              </span>
            </Link>
          </div>
          <div className="flex flex-col">
            <div>
              <ul className="text-text-medium/text-medium text-sm font-medium">
                <li className="mb-2">
                  <Link href="/privacy-policy" className="underline">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="underline">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="underline">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2024{" "}
            <a href="/" className="hover:underline">
              {SITE_TITLE}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
