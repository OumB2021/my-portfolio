"use client";

import { useMediaQuery } from "usehooks-ts";
import Logo from "../logo";
import NightMode from "../night-mode";
import { Button } from "../ui/button";
import ItemList from "./item-list";
import { navItems } from "./nav-elements";
import SidebarSheet from "./sidebar-sheet";

function Navbar() {
  const isXS = useMediaQuery("(max-width: 400px)");
  return (
    <nav className="flex items-center w-full py-5 px-4">
      <div className="flex items-center px-10 justify-between w-full max-w-7xl mx-auto">
        {/* LEFT SIDE - Logo */}
        <div className="flex items-center">
          <Logo />
        </div>
        {/* MIDDLE SIDE - Navigation */}
        <div className="hidden md:flex items-center justify-center gap-x-6">
          {navItems.map((item) => (
            <ItemList key={item.label} label={item.label} href={item.href} />
          ))}
        </div>
        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center justify-between md:gap-x-3">
          <NightMode className="hover:text-zinc-900" />
          <Button
            size={isXS ? "sm" : "default"}
            className="bg-zinc-800 text-gray-50 text-xs md:text-sm"
          >
            Contact Me
          </Button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex md:hidden items-center justify-center gap-2">
          <NightMode className="bg-zinc-800 rounded-full hover:bg-zinc-600" />
          <SidebarSheet />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
