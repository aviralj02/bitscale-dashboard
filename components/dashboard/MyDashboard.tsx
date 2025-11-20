"use client";

import GridTabs from "./GridTabs";
import Insights from "./Insights";
import WelcomeUser from "./WelcomeUser";

const MyDashboard = () => {
  return (
    <div className="px-[21px] my-[21px] w-full">
      <WelcomeUser />
      <Insights />
      <GridTabs />
    </div>
  );
};

export default MyDashboard;
