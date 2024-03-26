"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { icons } from "@/lib/data";
import { ThemeDropdown } from "./theme-dropdown/ThemeDropdown";
import SearchBox from "./SearchBox";
import { useGlobalContext } from "@/providers/globalContext";

export default function Navbar() {
  const router = useRouter();

  const { state: userInfo } = useGlobalContext();
  return (
    <nav className=" py-5 h-16 place-content-center mb-20 px-10 fixed w-full">
      <div className="flex items-center justify-between">
        <div className="">
          <Link href={"/"} className="text-white font-bold items-center">
            Weather App
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <SearchBox />
          <ThemeDropdown />
          <Button
            className="font-bold gap-3"
            onClick={() => router.push("https://github.com")}
          >
            {icons.github} Source code
          </Button>
        </div>
      </div>
    </nav>
  );
}
