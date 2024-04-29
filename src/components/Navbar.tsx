"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { icons } from "@/lib/data";
import { ThemeDropdown } from "./theme-dropdown/ThemeDropdown";
import SearchBox from "./SearchBox";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="py-5 h-16 place-content-center mb-20 px-10 fixed w-full">
      <div className="search-container flex items-center justify-center space-x-4">
        <SearchBox />
        <div className="btn-group flex items-center space-x-4 text-white">
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
