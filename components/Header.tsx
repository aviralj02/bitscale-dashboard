import { Coins } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <div className="flex items-center justify-end py-[10.5px] gap-4 border-b px-[21px]">
      <div className="h-8.5 flex items-center">
        <div className="flex h-full items-center px-2 gap-3.5 bg-[#EDF3EC] rounded-[10.5px]">
          <div className="flex items-center gap-1.5 text-[#438361]">
            <Coins className="size-3" />
            <span className="font-medium text-sm">450000/5500000</span>
          </div>

          <div
            role="button"
            className="text-white bg-[#438361] px-[7px] py-0.5 rounded-xl text-xs font-medium leading-4 cursor-pointer whitespace-nowrap"
          >
            Booster plan
          </div>
        </div>
      </div>

      <Avatar>
        <AvatarImage
          src="https://avatar.iran.liara.run/public/27"
          className="size-7"
        />
        <AvatarFallback>XY</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
