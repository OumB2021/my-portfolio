"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

function SidebarSheet() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded-full bg-zinc-700 hover:bg-zinc-900 p-2">
          <Menu className="size-5 text-zinc-50" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-zinc-800 border-l-0 w-2/3">
        <p>Holla</p>
      </SheetContent>
    </Sheet>
  );
}
export default SidebarSheet;
