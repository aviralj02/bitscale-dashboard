"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  type LucideIcon,
  Book,
  Blend,
  ChevronRight,
  Rocket,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  disabled?: boolean;
}

interface MenuGroup {
  label: string;
  items: Array<MenuItem>;
}

const SidebarOptionsGroup = () => {
  const [activeItem, setActiveItem] = useState<string>("My Dashboard");

  const menuGroups: Array<MenuGroup> = [
    {
      label: "Home",
      items: [
        {
          title: "My Dashboard",
          url: "#",
          icon: LayoutDashboard,
        },
        {
          title: "Playbooks",
          url: "#",
          icon: Book,
          disabled: true,
        },
        {
          title: "Integrations",
          url: "#",
          icon: Blend,
        },
      ],
    },
    {
      label: "Other",
      items: [
        {
          title: "Documentation",
          url: "#",
          icon: BookOpen,
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings,
        },
      ],
    },
  ];

  return (
    <>
      {menuGroups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel className="text-[#6B7280]">
            {group.label}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      activeItem === item.title &&
                        !item.disabled &&
                        "text-[#1A56DB] hover:text-[#1A56DB]",
                      item.disabled &&
                        "text-[#9CA3AF] cursor-not-allowed hover:bg-inherit hover:text-[#9CA3AF] focus:bg-inherit focus:text-[#9CA3AF] active:bg-inherit active:text-[#9CA3AF]"
                    )}
                    style={{
                      backgroundColor:
                        activeItem === item.title ? "#F3F4F6" : "",
                    }}
                    disabled={item.disabled}
                  >
                    <a
                      href={item.disabled ? "#" : item.url}
                      onClick={(e) => {
                        if (item.disabled) {
                          e.preventDefault();
                          return;
                        }
                        setActiveItem(item.title);
                      }}
                    >
                      <item.icon className="text-[#6B7280]" />
                      <span>{item.title}</span>

                      {item.title === "Playbooks" ? (
                        <span className="px-3 py-1.5 rounded-[12px] bg-[#FBF3DB] ml-auto">
                          <Rocket className="size-3 text-[#CB912E]" />
                        </span>
                      ) : (
                        <ChevronRight className="size-4 ml-auto" />
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
};

export default SidebarOptionsGroup;
