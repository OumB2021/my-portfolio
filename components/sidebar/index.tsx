"use client";

import { sideItems } from "./side-elements";
import SideList from "./side-list";
function Sidebar() {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-full">
      <div className="flex flex-col gap-y-2 justify-center">
        {sideItems.map((item) => (
          <SideList
            key={item.label}
            label={item.label}
            href={item.href}
            Icon={item.Icon}
          />
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
