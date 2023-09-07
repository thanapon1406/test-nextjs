import React from "react";
import Card from "@/app/components/card";

// import icons image
import Image from "next/image";
import IconLink from "@/assets/images/icons/link.svg";
import IconBoard from "@/assets/images/icons/board.svg";
import Button from "../button";

type Props = {
  title: string;
};

const data = {
  department: 25,
  project: "1,200",
};

const board = {
  countAll: "36,000",
  countOnline: "34,704",
  countOffline: "216",
};

const sensor = {
  countAll: "612,000",
  countOnline: "610,920",
  countOffline: "1,080",
};

export default function DashboardThai({ title }: Props) {
  return (
    <div className="grid col-span-4 items-start gap-16">
      <div className="flex flex-col gap-4">
        <div>
          <h1>Welcome to My Next.js App</h1>
          <Button
            className="bg-pink-500 text-white px-4 py-2 rounded"
            label="Click me"
          />
        </div>
        <h2>{title}</h2>
        <div className="flex gap-8">
          <div className="flex w-[304px] pt-4 pl-6 pb-4 pr-4 justify-between items-start bg-blue-600 rounded-xl">
            <div className="flex flex-col">
              <p className="font-normal text-sm text-gray">หน่วยงาน</p>
              <h2>{data.department} หน่วยงาน</h2>
            </div>
            <div>
              <Image src={IconLink} width={24} height={24} alt=""></Image>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-normal text-sm text-gray">โครงการทั้งหมด</p>
            <p className=" font-semibold text-2xl">{data.project} โครงการ</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-start self-stretch">
        <div className="flex flex-col gap-4 items-start w-[440px]">
          <div id="board" className="">
            <h2>บอร์ด</h2>
            <div className="flex items-center">
              <p className="text-2xl font-bold leading-8">
                ทั้งหมด
                <span className="text-3xl font-bold ps-1.5 pe-1.5">
                  {board.countAll}
                </span>
                บอร์ด
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Card
              id="board-offline"
              name="บอร์ดออนไลน์"
              status={true}
              count="216"
            />
            <Card
              id="board-offline"
              name="บอร์ดออฟไลน์"
              status={false}
              count="34,704"
            />
          </div>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="260"
            viewBox="0 0 2 260"
            fill="none"
          >
            <path d="M1 0V260" stroke="#98A2B3" />
          </svg>
        </div>
        <div className="flex flex-col gap-4 items-start w-[440px]">
          <div className="flex flex-col gap-4">
            <div id="sensor" className="">
              <h2>เซนเซอร์</h2>
              <div className="flex items-center">
                <p className="text-2xl font-bold leading-8">
                  ทั้งหมด
                  <span className="text-3xl font-bold ps-1.5 pe-1.5">
                    {sensor.countAll}
                  </span>
                  เซนเซอร์
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Card
              id="sensor-offline"
              name="เซนเซอร์ออฟไลน์"
              status={false}
              count="1,080"
            />
            <Card
              id="sensor-online"
              name="เซนเซอร์ออนไลน์"
              status={true}
              count="610,920"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
