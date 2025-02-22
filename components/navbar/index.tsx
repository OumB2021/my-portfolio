"use client";

import Logo from "../logo";
import ItemList from "./item-list";
import { navItems } from "./nav-elements";
import CallToAction from "@/app/(browse)/_components/hero/call-to-action";
import { useEffect, useState } from "react";

type LogoProps = {
  className?: string;
  className2?: string;
};

function Navbar({ className }: LogoProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center w-full py-5 px-4 z-50 ">
      <div className="flex items-center px-5 lg:px-10 justify-between w-full max-w-7xl mx-auto">
        {/* LEFT SIDE - Logo */}
        <div className="flex items-center">
          <Logo className={className} />
        </div>

        {/* MIDDLE SIDE - Navigation */}
        <div className="hidden md:flex items-center justify-center gap-x-6 lg:pl-40 md:pl-20">
          {navItems.map((item) => (
            <ItemList
              key={item.label}
              label={item.label}
              href={item.href}
              className={className}
            />
          ))}
        </div>

        {/* RIGHT SIDE */}
        <CallToAction />
      </div>
    </nav>
  );
}
export default Navbar;
