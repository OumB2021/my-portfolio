import { useMediaQuery } from "usehooks-ts";
import Logo from "../logo";
import NightMode from "../night-mode";
import { Button } from "../ui/button";
import ItemList from "./item-list";
import { navItems } from "./nav-elements";

function Navbar() {
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
        <div className="flex items-center justify-between gap-x-3">
          <NightMode />
          <Button className="bg-zinc-800 text-gray-50">Contact Me</Button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
