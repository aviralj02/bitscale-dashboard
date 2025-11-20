"use client";

import { MyGridsColumn } from "@/types/grids";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUp,
  Building2,
  ChevronDown,
  Compass,
  Ellipsis,
  FileDown,
  Star,
  Users,
} from "lucide-react";
import { DataTable } from "../DataTable";
import { mygridData } from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const StarredGrid = () => {
  const tableIcons = [
    <Building2 className="size-3 text-[#438361]" />,
    <Users className="size-3 text-[#8F65AF]" />,
    <Compass className="size-3 text-[#6b7aff]" />,
    <FileDown className="size-3 text-[#9F6B53]" />,
  ];

  const columns: Array<ColumnDef<MyGridsColumn>> = [
    {
      id: "name",
      accessorKey: "name",
      header: () => (
        <span className="flex items-center gap-3 pl-10">
          Name <ArrowUp className="size-3.5" />
        </span>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-3 pl-10 relative">
          <Star
            fill="#FDB022"
            className="size-4 text-[#FDB022] cursor-pointer"
          />

          {row.index === 0 ? (
            <div className="flex items-center">
              <div className="table-icon">
                {tableIcons[Math.floor(Math.random() * 4)]}
              </div>
              <div className="table-icon -ml-3">
                {tableIcons[Math.floor(Math.random() * 4)]}
              </div>
              <div className="table-icon -ml-3">
                {tableIcons[Math.floor(Math.random() * 4)]}
              </div>
            </div>
          ) : (
            <div className="table-icon">
              {tableIcons[Math.floor(Math.random() * 4)]}
            </div>
          )}

          {row.getValue("name")}

          {row.index === 0 && (
            <ChevronDown className="cursor-pointer absolute size-4 left-2" />
          )}
        </div>
      ),
    },
    {
      header: "Edited By",
      accessorKey: "editedBy",
      cell: ({ row }) => (
        <div className="capitalize flex items-center gap-3">
          <Avatar className="flex justify-center items-center">
            <AvatarImage
              src={`https://avatar.iran.liara.run/public/${Math.floor(
                Math.random() * 40
              )}`}
              className="size-6"
            />
            <AvatarFallback>IL</AvatarFallback>
          </Avatar>

          {row.getValue("editedBy")}
        </div>
      ),
    },
    {
      header: "Last edited",
      accessorKey: "lastEdited",
      cell: ({ row }) => (
        <div className="capitalize">
          {new Date(row.getValue("lastEdited")).toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
      ),
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: () => <Ellipsis className="size-4" />,
    },
  ];
  return (
    <div className="px-5">
      <DataTable columns={columns} data={mygridData.slice(0, 4)} />
    </div>
  );
};

export default StarredGrid;
