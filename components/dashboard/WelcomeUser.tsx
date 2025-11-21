import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../ui/button";

import { Building2, User, Plus } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import FindPeopleDialog from "../FindPeopleDialog";
import { useDialog } from "@/hooks/use-dialog";

const WelcomeUser = () => {
  const isMobile = useIsMobile();
  const { open, closeDialog, openDialog } = useDialog();

  return (
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
                  onClick={openDialog}
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
            <Button className="font-medium cursor-pointer" variant={"outline"}>
              <Building2 className="size-4 text-[#438361]" /> Find Companies
            </Button>
            <Button
              className="font-medium cursor-pointer"
              variant={"outline"}
              onClick={openDialog}
            >
              <User className="size-4 text-[#8F65AF]" /> Find People
            </Button>
            <Button className="font-medium cursor-pointer" size={"sm"}>
              <Plus className="size-4" /> New Grid
            </Button>
          </>
        )}
      </div>

      <FindPeopleDialog open={open} onOpenChange={closeDialog} />
    </div>
  );
};

export default WelcomeUser;
