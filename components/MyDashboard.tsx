"use client";

import { Building2, Plus, User } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const MyDashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="px-[21px] mt-[21px] w-full">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-semibold text-lg text-[#1A202C]">
            Welcome back, Tim!
          </h2>
          <span className="text-sm text-[#6B7280]">
            Here's your daily scoop on Bitscale!
          </span>
        </div>

        <div className="flex items-center gap-3">
          {isMobile ? (
            <>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="font-medium cursor-pointer"
                    variant={"outline"}
                  >
                    <Building2 className="size-4 text-[#438361]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Find Companies</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="font-medium cursor-pointer"
                    variant={"outline"}
                  >
                    <User className="size-4 text-[#8F65AF]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Find People</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="font-medium cursor-pointer" size={"sm"}>
                    <Plus className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>New Grid</TooltipContent>
              </Tooltip>
            </>
          ) : (
            <>
              <Button
                className="font-medium cursor-pointer"
                variant={"outline"}
              >
                <Building2 className="size-4 text-[#438361]" /> Find Companies
              </Button>
              <Button
                className="font-medium cursor-pointer"
                variant={"outline"}
              >
                <User className="size-4 text-[#8F65AF]" /> Find People
              </Button>
              <Button className="font-medium cursor-pointer" size={"sm"}>
                <Plus className="size-4" /> New Grid
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
