import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { FC, PropsWithChildren } from "react";

import "./globals.css";
import { Footer, Header } from "@/components/layout";
import { SITE_TITLE } from "@/constants/env";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_TITLE}`,
    default: SITE_TITLE,
  },
  description: `${SITE_TITLE}`,
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header>
          <h1>{SITE_TITLE}</h1>
        </Header>
        <div className="container mx-auto max-w-5xl">
          <div className="mx-4 lg:mx-8">{children}</div>
        </div>
        <Footer />
      </body>
      {/* {process.env.NODE_ENV === "development" ? null : <GTMRegister />} */}
    </html>
  );
};

export default RootLayout;
