import { SidebarGroup } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronsUpDown } from "lucide-react";

const SidebarProfileGroup = () => {
  return (
    <SidebarGroup className="px-3 py-2 border-b border-gray-200">
      <div className="flex items-center px-2 py-1.5 gap-2">
        <div className="flex">
          <div>
            <Avatar>
              <AvatarImage
                src="https://avatar.iran.liara.run/public/2"
                alt="avatar1"
                className="object-cover"
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </div>

          <div className="-ml-5 z-10">
            <Avatar>
              <AvatarImage
                src="https://avatar.iran.liara.run/public/36"
                alt="avatar2"
                className="object-cover"
              />
              <AvatarFallback>JK</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <span className="text-sm font-medium">GTM Spaces</span>

        <ChevronsUpDown className="size-4 ml-auto" />
      </div>
    </SidebarGroup>
  );
};

export default SidebarProfileGroup;
