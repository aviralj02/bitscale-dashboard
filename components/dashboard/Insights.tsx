import { cn } from "@/lib/utils";
import { Check, Circle, FileCheckCorner } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface MockItem {
  id: string;
  title: string;
  description: string;
  image: string;
  postedTime: string;
}

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mockItems: Array<MockItem> = [
    {
      id: "1",
      title: "How to Integrate 2 Way HubSpot",
      description:
        "Prerequisites for this integration is that you should have a HubSpot account and Copy the API key. We simple add our API key through the integrations panel.",
      image:
        "https://fastly.picsum.photos/id/1022/143/97.jpg?hmac=mJmnj6ymyYX7CjsFA_a55pW3QACniHmJqlzFW2ahpzo",
      postedTime: "Posted today",
    },
    {
      id: "2",
      title: "How to Integrate 2 Way HubSpot - 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi aliquid in totam delectus quo eum, tempore cumque obcaecati et necessitatibus ad maxime blanditiis exercitationem. Nisi odio itaque quo iusto",
      image:
        "https://fastly.picsum.photos/id/151/143/97.jpg?hmac=DJ4Za9a3Y_g9eVj-ixh1594_9_-yCbpvN_aSmA5BmTo",
      postedTime: "Posted yesterday",
    },
    {
      id: "3",
      title: "How to Integrate 2 Way HubSpot - 3",
      description:
        "2x Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi aliquid in totam delectus quo eum, tempore cumque obcaecati et necessitatibus ad maxime blanditiis exercitationem. Nisi odio itaque quo iusto",
      image:
        "https://fastly.picsum.photos/id/255/143/97.jpg?hmac=XPLcbNjXk0KXwUtfWlvmz1tQIeKi4ceNeqFZJHOZo7w",
      postedTime: "Posted 2 days ago",
    },
    {
      id: "4",
      title: "How to Integrate 2 Way HubSpot - 4",
      description:
        "3x Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi aliquid in totam delectus quo eum, tempore cumque obcaecati et necessitatibus ad maxime blanditiis exercitationem. Nisi odio itaque quo iusto",
      image:
        "https://fastly.picsum.photos/id/730/143/97.jpg?hmac=UcRSvY0ndMHG5cGBf-h99uRosdL5YLjtoRHL8Nn9zSc",
      postedTime: "Posted 2 days ago",
    },
  ];

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const currentItem = mockItems[activeIndex];

  return (
    <div className="mt-[21px] w-full flex gap-6 lg:flex-row flex-col">
      <div className="px-5 py-4 w-full bg-[#E7F3F880] rounded-xl flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <h3 className="text-[#347FA9] font-500 text-sm">
            Latest from Bitscale
          </h3>

          <div className="flex items-center gap-1">
            {mockItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full h-1.5 cursor-pointer",
                  index === activeIndex
                    ? "bg-[#347FA9] w-6"
                    : "bg-[#8DBAD0] w-1.5"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full"
          >
            <div className="relative w-[147px] rounded-2xl overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="object-cover w-[147px]"
              />
            </div>
          </a>

          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-[13px] text-[#1F2A37]">
              {currentItem.title}
            </h4>
            <p className="text-[#6B7280] text-xs description-ellipsis ">
              {currentItem.description}
            </p>
            <span className="text-[#6B7280] text-xs">
              {currentItem.postedTime}
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 w-full bg-[#E7F3F880] rounded-xl">
        <div className="flex items-center gap-2.5">
          <div className="bg-[#4B5563] rounded-full size-8 grid place-content-center">
            <FileCheckCorner className="size-4 text-[#F9FAFB]" />
          </div>

          <div className="flex flex-col text-[#383530]">
            <h4 className="font-medium text-sm">Complete product demo</h4>
            <span className="text-xs">
              92% of users nailed Bitscale after this walkthrough
            </span>
          </div>
        </div>

        <div className="my-4 w-full flex items-center gap-2.5">
          <div className="relative w-full">
            <div className="h-1 bg-[#E5E7EB] rounded-full" />
            <div
              className="h-1 bg-[#438361] absolute inset-0 rounded-full"
              style={{
                width: "75%",
              }}
            />
          </div>
          <span className="text-[10px] text-[#438361] font-semibold">75%</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-1.5">
            <div className="bg-[#347FA9] rounded-full size-3.5 grid place-content-center">
              <Check className="size-2.5 text-[#F9FAFB]" />
            </div>

            <span className="font-medium text-xs">Create your data list</span>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="bg-[#347FA9] rounded-full size-3.5 grid place-content-center">
              <Check className="size-2.5 text-[#F9FAFB]" />
            </div>

            <span className="font-medium text-xs">Learn about BitAgent</span>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="bg-[#347FA9] rounded-full size-3.5 grid place-content-center">
              <Check className="size-2.5 text-[#F9FAFB]" />
            </div>

            <span className="font-medium text-xs">Connect an integration</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Circle className="size-3.5 text-[#D1D5DC]" />

            <span className="font-medium text-xs">
              Customize waterfall providers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
