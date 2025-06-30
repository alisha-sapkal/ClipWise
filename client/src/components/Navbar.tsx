import React from "react";
import Image from "next/image";
import logo from "../app/logo.png";
import {UserRound} from "lucide-react";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-around py-4 text-black bg-gray-100 shadow-2xl mt-2 rounded-full">
      <div className="flex text-2xl flex-row items-center justify-center gap-1">
        <Image src={logo} alt="Logo" width={50} height={50} priority />
        <h1>ClipWise</h1>
      </div>
      <UserRound className="text-4xl text-gray-700 cursor-pointer" />
    </div>
  );
}

export default Navbar;
