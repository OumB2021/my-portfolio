import { LucideIcon } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type props = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

function SideList({ label, href, Icon }: props) {
  return (
    <div className="flex flex-col ">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Link href={href}>
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-800 border-b border-gray-300 hover:bg-zinc-600">
                <Icon strokeWidth={1.5} className="text-zinc-50" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            align="center"
            className="text-zinc-50 bg-zinc-800"
          >
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
export default SideList;
