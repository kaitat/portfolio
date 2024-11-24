import Image from "next/image";

export const Me = () => {
  return (
    <div>
      <Image
        src="/images/me.png"
        alt="みやざき かいとのアイコン"
        quality={100}
        width={200}
        height={200}
        className="w-48 h-auto m-auto"
      />
      <h1 className="font-bold text-4xl text-black/100">みやざき かいと</h1>
    </div>
  );
};
