import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-fit w-full flex flex-col md:flex-row justify-center items-center p-8 border-t-1 border-[#333333] gap-18 lg:px-48 text-white">
      <div className="flex flex-col justify-start items-start gap-12 md:gap-38 w-full">
        <div className="flex justify-start items-center gap-4 w-full">
          <img src="/logo.svg" alt="" className="w-24 h-auto" />
        </div>
        <p className="hidden md:flex">
          © 2025 Attirmidzi. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8 md:h-[249px] lg:justify-center lg:gap-36">
        <ul className="flex flex-col gap-2 justify-start items-start h-full">
          <li>
            <a href="https://www.instagram.com/_.attiraje/">instagram</a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@_midz_29">tiktok</a>
          </li>
          <li>
            <a href="https://github.com/Attir29">github</a>
          </li>
          <li>
            <a href="https://wa.link/uolcn4">whatsapp</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 justify-start items-start h-full">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/portfolio">web development</Link>
          </li>
          <li>
            <Link href="/public">public speaking</Link>
          </li>
        </ul>
        <p className="flex md:hidden text-xs opacity-50">
          © 2025 Attirmidzi. All rights reserved.
        </p>
      </div>
    </div>
  );
}
