import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { List, Search } from "lucide-react";

const MyGrids = dynamic(() => import("./MyGrids"), { ssr: false });
const StarredGrid = dynamic(() => import("./StarredGrid"), { ssr: false });

interface TabItem {
  title: string;
  value: string;
  content: React.ReactNode;
}

const GridTabs = () => {
  const tabs: Array<TabItem> = [
    {
      title: "My Grids",
      value: "my-grids",
      content: <MyGrids />,
    },
    {
      title: "Starred",
      value: "starred",
      content: <StarredGrid />,
    },
  ];

  return (
    <Tabs defaultValue="my-grids" className="w-full mt-6 px-5">
      <div className="flex items-center justify-between">
        <TabsList className="bg-inherit border-b border-gray-200 rounded-none text-sm gap-8 p-0 m-0!">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="shadow-none! cursor-pointer rounded-none border-t-0 border-r-0 border-l-0 data-[state=active]:border-[#1A56DB] data-[state=active]:text-[#1A56DB] px-5 pb-3.5 -mb-0.5"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex items-center gap-3 justify-end w-full">
          <div className="relative max-w-[286px] w-full">
            <Search className="absolute size-3.5 text-[#6B7280] left-3 top-[11px]" />
            <Input
              type="text"
              placeholder="Search grids and workbooks..."
              className="text-xs py-[10.5px] pl-[42px] w-full focus-visible:ring-[#69cdff]/50"
            />
          </div>

          <div className="size-8 rounded-full bg-[#F3F4F6] grid place-items-center">
            <List className="text-[#374151] size-3.5" />
          </div>
        </div>
      </div>

      {tabs.map((tab) => (
        <TabsContent value={tab.value} className="mt-4" key={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default GridTabs;
