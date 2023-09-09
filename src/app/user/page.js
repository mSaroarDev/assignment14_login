import { headers } from "next/headers";

async function GetData() {
  const headersList = headers();
  return headersList.get("email");
}

import React from "react";
import AppnavLogged from "@/components/AppnavLogged";

const Page = async () => {
  const x = await GetData();
  return (
    <div>
      <AppnavLogged />
      <div className="mt-20">{x}</div>
    </div>
  );
};

export default Page;
