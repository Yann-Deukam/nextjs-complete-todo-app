import Image from "next/image";
import React from "react";

const AppLogo = () => {
  return (
    <div className="flex gap-2 items-center my-8 justify-center">
      <div>
        <Image src={"/logo.png"} alt="logo" width={50} height={50} />
      </div>
      <div className="font-bold text-2xl flex gap-1 justify-center items-center">
        <span className="text-primary">Better</span>
        <span>Do</span>
      </div>
    </div>
  );
};

export default AppLogo;
