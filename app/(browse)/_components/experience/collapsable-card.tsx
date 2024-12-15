"use client";

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
