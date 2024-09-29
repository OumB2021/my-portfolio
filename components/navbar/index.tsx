import Logo from "../logo";
import { navItems } from "./nav-elements";

function Navbar() {
  return (
    <nav className="flex items-center w-full py-5 px-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* LEFT SIDE - Logo */}
        <div className="flex items-center">
          <Logo />
        </div>
        {/* MIDDLE SIDE - Navigation */}
        <div className="flex items-center justify-center gap-x-4"></div>
      </div>
    </nav>
  );
}
export default Navbar;
