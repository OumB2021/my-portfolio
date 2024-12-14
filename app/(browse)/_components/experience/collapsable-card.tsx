"use client";

import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import CardContent from "./card-content";

function CollapsableCard() {
  return (
    <div className="max-w-5xl mt-4 mx-auto flex flex-col gap-4">
      <CardContent />
      <CardContent />
    </div>
  );
}
export default CollapsableCard;
