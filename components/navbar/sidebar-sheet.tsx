"use client";
import { useState } from "react";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

function SidebarSheet() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-full bg-zinc-800 p-2">
          <Menu className="size-5 text-zinc-50" />
        </button>
      </SheetTrigger>
    </Sheet>
  );
}
export default SidebarSheet;
