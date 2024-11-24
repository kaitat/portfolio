import Link from "next/link";
import type { FC } from "react";

const NotFound: FC = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>お探しのページは見つかりませんでした。</p>
      <Link className="text-state-info underline" href="/">
        ホームに戻る
      </Link>
    </div>
  );
};
export default NotFound;
