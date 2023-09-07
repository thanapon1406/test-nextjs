import React, { useEffect } from "react";
// import icons image
import Image from "next/image";
import IconLink from "@/assets/images/icons/link.svg";
import IconBoard from "@/assets/images/icons/board.svg";
import IconSensor from "@/assets/images/icons/sensor.svg";

type Props = {
  id: string;
  name: string;
  status: boolean;
  count: string;
};

const sensor = {
  online: true,
  countAll: "612,000",
  countOnline: "610,920",
  countOffline: "1,080",
};

const board = {
  countAll: "36,000",
  countOnline: "34,704",
  countOffline: "216",
};

export default function Card({ id, name, status, count }: Props) {
  return (
    <div id={id}>
      <div className="flex items-start pt-4 pl-6 pb-4 pr-4 card-status rounded-xl justify-between">
        <div className="flex flex-col gap-2 items-start w-[148px]">
          <div
            className={`p-1 justify-center items-center rounded-lg ${
              !status ? "bg-warning" : "bg-success"
            }`}
          >
            <Image src={IconSensor} width={36} height={36} alt=""></Image>
          </div>
          <span>
            <p className="font-normal text-sm text-gray">{name}</p>
            <h2>{count}</h2>
          </span>
        </div>
        <div>
          <Image src={IconLink} width={24} height={24} alt=""></Image>
        </div>
      </div>
    </div>
  );
}
