"use client";

import { useMediaQuery } from "usehooks-ts";
import Logo from "../logo";
import NightMode from "../night-mode";
import ItemList from "./item-list";
import { navItems } from "./nav-elements";
import SidebarSheet from "./sidebar-sheet";

function Navbar() {
  const isXS = useMediaQuery("(max-width: 400px)");
  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center w-full py-5 px-4 border-b ">
      <div className="flex items-center px-5 lg:px-10 justify-between w-full max-w-7xl mx-auto">
        {/* LEFT SIDE - Logo */}
        <div className="flex items-center">
          <Logo />
        </div>
        {/* MIDDLE SIDE - Navigation */}
        <div className="hidden md:flex items-center justify-center gap-x-6">
          {navItems.map((item) => (
            <ItemList key={item.label} label={item.label} href={item.href} />
          ))}
          <NightMode className="bg-zinc-700 rounded-full " />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex md:hidden items-center justify-center gap-2">
          <NightMode className="bg-zinc-700 rounded-full hover:bg-zinc-900" />
          <SidebarSheet />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
