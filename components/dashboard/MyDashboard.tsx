"use client";

import Insights from "./Insights";
import WelcomeUser from "./WelcomeUser";

const MyDashboard = () => {
  return (
    <div className="px-[21px] mt-[21px] w-full">
      <WelcomeUser />
      <Insights />
    </div>
  );
};

export default MyDashboard;
