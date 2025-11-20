import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

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
    <Tabs defaultValue="my-grids" className="w-full mt-6">
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

      {tabs.map((tab) => (
        <TabsContent value={tab.value} className="mt-4" key={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default GridTabs;
