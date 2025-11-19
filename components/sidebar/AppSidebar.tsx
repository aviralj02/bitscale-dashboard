"use client";

import { ChevronUp } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../ui/sidebar";
import SidebarProfileGroup from "./SidebarProfileGroup";
import SidebarOptionsGroup from "./SidebarOptionsGroup";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader
        className={`px-[19px] py-[16.5px] border-b border-gray-200`}
      >
        <img
          alt="Bitscale"
          draggable="false"
          className="w-24 select-none"
          src="/assets/bitscale.svg"
        />
      </SidebarHeader>

      <SidebarContent>
        <SidebarProfileGroup />
        <SidebarOptionsGroup />
      </SidebarContent>

      <SidebarFooter className="px-2">
        <div className="bg-[#F3F4F6] px-3 py-4 flex flex-col items-start gap-1">
          <div className="flex items-center justify-between w-full">
            <img
              alt="Bitscale"
              draggable="false"
              className="w-16 select-none"
              src="/assets/bitscale.svg"
            />
            <ChevronUp className="size-3" />
          </div>

          <span className="font-medium text-sm text-gray-600">
            Get Support at Bitscale
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
