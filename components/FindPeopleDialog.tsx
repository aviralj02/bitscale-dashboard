"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Briefcase,
  ChevronDown,
  Eye,
  GitMerge,
  Globe,
  LockKeyholeOpen,
  LucideIcon,
  MapPin,
  MapPinned,
  Search,
  TextSearch,
  Users,
  UserSearch,
} from "lucide-react";
import FilterComponent from "./FilterComponent";

interface MyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Filter {
  type: "search" | "dropdown";
  icon: LucideIcon;
  text: string;
  desc?: string;
}

const FindPeopleDialog = ({ open, onOpenChange }: MyDialogProps) => {
  const filterList: Array<Filter> = [
    {
      type: "search",
      icon: UserSearch,
      text: "People Keyword",
    },
    {
      type: "dropdown",
      icon: Briefcase,
      text: "Job Title",
      desc: "E.g: Manager, Software Engineer",
    },
    {
      type: "dropdown",
      icon: Globe,
      text: "Company Website",
      desc: "E.g: Google.com, LinkedIn.com",
    },
    {
      type: "dropdown",
      icon: MapPinned,
      text: "Person Location",
      desc: "E.g: London, Great New York City",
    },
    {
      type: "dropdown",
      icon: MapPin,
      text: "Company Location",
      desc: "E.g: United States, UAE",
    },
    {
      type: "dropdown",
      icon: Users,
      text: "Company Headcount",
      desc: "E.g: 11-15, 10000+",
    },
    {
      type: "dropdown",
      icon: GitMerge,
      text: "Management Level",
      desc: "E.g: Owner, Founder",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-8 pb-[18px] max-w-5xl! w-full">
        <DialogTitle className="hidden" />

        <div className="flex gap-5">
          {/* Left Side */}
          <div className="flex flex-col max-w-80 w-full gap-9">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-extrabold">Find People</h1>

              <button className="font-medium gap-1 text-xs flex items-center px-2.5 py-1 bg-[#F3F4F6] rounded-md">
                <ChevronDown className="size-3.5" />
                Saved Search
              </button>
            </div>

            <div className="flex flex-col h-[550px] overflow-x-auto">
              {filterList.map((filter) => (
                <FilterComponent
                  key={filter.text}
                  type={filter.type}
                  filterIcon={filter.icon}
                  filterText={filter.text}
                  filterInfo={filter.desc}
                />
              ))}
            </div>

            <div className="flex items-center w-full gap-4">
              <button className="text-gray-800 cursor-pointer text-xs flex items-center gap-2 py-2 px-3 bg-[#E5E7EB] rounded-lg">
                <TextSearch className="size-4" />
                Save Search
              </button>
              <button className="text-white cursor-pointer text-xs flex items-center gap-2 py-2 px-[34.5px] bg-gray-800 rounded-lg">
                <Eye className="size-4" />
                Preview Result
              </button>
            </div>
          </div>

          {/* Rigth Side */}
          <div className="flex flex-col min-w-0 max-w-[623px] mt-1 mb-16">
            <div className="bg-[#FBECDD] text-[#D9730E] py-1 px-3 gap-1.5 flex items-center w-fit rounded-2xl self-end">
              <Search className="size-3" />
              <span className="font-medium text-xs">8000/50000</span>
            </div>

            <div className="flex items-center text-xs justify-between mt-1">
              <span className="font-medium text-gray-600">
                Found 0 companies. Click preview to view results
              </span>

              <span className="text-[#CB912E] flex items-center gap-1">
                <LockKeyholeOpen className="size-4" />
                <span className="font-bold">
                  Unlock 100,000 leads with Enterprise Plan*
                </span>
              </span>
            </div>

            <div className="overflow-x-auto scrollbar mt-2 h-full">
              <table className="h-full min-w-max">
                <thead>
                  <tr className="bg-[#F9FAFB] text-[#6B7280] text-xs font-semibold uppercase">
                    <th className="p-4 text-center whitespace-nowrap">Name</th>
                    <th className="p-4 text-center whitespace-nowrap">Title</th>
                    <th className="p-4 text-center whitespace-nowrap">
                      Headline
                    </th>
                    <th className="p-4 text-center whitespace-nowrap">
                      LinkedIn URL
                    </th>
                    <th className="p-4 text-center whitespace-nowrap">
                      Company
                    </th>
                    <th className="p-4 text-center whitespace-nowrap">
                      Company URL
                    </th>
                    <th className="p-4 text-center whitespace-nowrap">
                      Company Location
                    </th>
                  </tr>
                </thead>

                {/* Empty table placeholder */}
                <tbody>
                  <tr>
                    <td colSpan={7}>
                      <div className="w-full flex flex-col items-center">
                        <img
                          src="/assets/table-placeholder.png"
                          alt="no-rows-to-display"
                          className="w-36"
                        />

                        <div className="flex flex-col font-medium text-xs text-[#9CA3AF] text-center max-w-[350px] w-full leading-[150%]">
                          <span>
                            Start your Company search , preview, and import
                            companies for enrichment by applying any filter in
                            the left panel.{" "}
                          </span>
                          <span>OR</span>
                          <span>Import companies from saved Search.</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FindPeopleDialog;
