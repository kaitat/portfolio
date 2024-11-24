import { TypographyH2, TypographyP } from "@/components/base";

export const Introduction = () => {
  return (
    <div className="flex flex-col">
      <TypographyH2>はじめまして、みやざき かいとです</TypographyH2>
      <TypographyP>
        名古屋の会社でフロントエンド寄りのエンジニアとして、Webサイトを作っています。
        最近は仕事もプライベートもNext.jsを使って開発をしているので、
        フロントエンド寄りの技術を最近は触っていますが、バックエンドやインフラも少し触ります。
      </TypographyP>
    </div>
  );
};
