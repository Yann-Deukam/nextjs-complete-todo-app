import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { CircleAlert } from "lucide-react";

const ErrorHoverCard = ({ message }: { message: string }) => {
  return (
    <div className="text-red-500 flex items-center gap-1">
      <div className="absolute right-2 top-8">
        <HoverCard>
          <HoverCardTrigger className="cursor-pointer">
            <CircleAlert height={16} width={16} />
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-red-500 text-sm">{message}</p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default ErrorHoverCard;
