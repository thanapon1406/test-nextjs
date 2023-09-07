import React from "react";
import Detail from "@/app/components/map/details";
import DashboardThai from "@/app/components/dashboard/thai";

type Props = {
  title: string;
};

const title = "ภาพรวมของ Axons IoT ในประเทศไทย";

const isThai: boolean = false;

export default function Dashboard({}: Props) {
  return (
    <div className="grid p-8">
      <div className="grid grid-cols-6 items-start gap-4">
        <div
          id="left-menu"
          className="flex flex-col col-span-2 gap-4 justify-between"
        >
          <div id="tap-mode" className="flex flex-row border-b under-line">
            <a href="#" id="all-country" className="flex p-4">
              ทั้งหมด
            </a>
            <a href="#" id="thai-country" className="flex p-4">
              ประเทศไทย
            </a>
          </div>
          <div
            id="display-country"
            className="flex px-0 py-16 justify-center items-center gap-2 h-[586px]"
          >
            map
          </div>
          <div id="details">
            <Detail />
          </div>
        </div>
        <div id="dashboard">{!isThai && <DashboardThai title={title} />}</div>
      </div>
    </div>
  );
}
