import type { FC } from "react";

const Loading: FC = () => {
  //FIXME: ここにローディングアイコンを表示するコンポーネントを実装してください
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p>◯</p>
    </div>
  );
};

export default Loading;
