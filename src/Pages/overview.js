import React from "react";
import ChartOverview from "../components/ChartOverview";
import DashboardItems from "../components/DashboardItems";
import Layout from "../components/Layout";

import Payments from "../components/Payments";

const Overview = () => {
  return (
    <Layout>
      <div>
        <div className="gap-14 flex items-center mb-27">
          <div className=" grid gap-3  grid-cols-2 w-1/2">
            <DashboardItems title="Daily Transaction Volume" amount="2,342" />
            <DashboardItems
              title="Daily Transaction Value"
              amount="₦4,000,000"
            />
          </div>
          <div className=" grid gap-3  grid-cols-2 w-1/2">
            <DashboardItems title="Total Transaction Volume" amount="452,000" />
            <DashboardItems
              title="Total Transaction Value"
              amount="₦4,000,000"
            />
          </div>
        </div>
        <ChartOverview />

        <Payments />
      </div>
    </Layout>
  );
};

export default Overview;
