import React from "react";

import AppnavLogged from "@/components/AppnavLogged";
import DashboardCard from "@/components/DashboardCard";
import parseJwt from "../utils/GetUserFromToken";

export default async function Page() {
  const payloadData = await parseJwt();
  console.log(payloadData);

  return (
    <>
      <AppnavLogged />
      <main>
        <div className="onerow w-full p-7 mt-24">
          <div className="grid grid-cols-4 gap-5">
            <DashboardCard name="Total Products" count="200" />
            <DashboardCard name="Total Customers" count="10505" />
            <DashboardCard name="Total Vendors" count="35" />
            <DashboardCard name="Total Orders" count="20568" />
          </div>
        </div>
      </main>
    </>
  );
}
