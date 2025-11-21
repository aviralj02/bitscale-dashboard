"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, LucideIcon, Search } from "lucide-react";

type Props = {
  type: "search" | "dropdown";
  filterIcon: LucideIcon;
  filterText: string;
  filterInfo?: string;
};

const FilterComponent = ({
  type,
  filterIcon: FilterIcon,
  filterText,
  filterInfo,
}: Props) => {
  const renderTypeInfo = (filterType: "search" | "dropdown") => {
    switch (filterType) {
      case "search": {
        return (
          <div className="relative w-full border-[#6B7280] border-b pb-3 mt-4">
            <Search className="size-4 absolute top-1 text-[#6B7280]" />
            <input
              className="text-sm leading-[150%] p-0 pl-6 border-none outline-none w-full"
              type="text"
              placeholder="Enter single keyword here..."
            />
          </div>
        );
      }

      case "dropdown": {
        return (
          <span className="text-xs leading-[150%] text-[#6B7280] mt-1.5">
            {filterInfo}
          </span>
        );
      }
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-start relative mt-3 pb-4 border-b border-gray-200",
        type === "dropdown" && "cursor-pointer"
      )}
    >
      {type === "dropdown" && (
        <ChevronDown className="size-4 text-[#101828] absolute top-3.5 right-0" />
      )}

      <div className="flex items-center gap-2">
        <FilterIcon className="size-4" />
        <span className="font-semibold text-[#111928] text-sm leading-[150%]">
          {filterText}
        </span>
      </div>

      {renderTypeInfo(type)}
    </div>
  );
};

export default FilterComponent;
