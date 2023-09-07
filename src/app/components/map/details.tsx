import React from "react";

type Props = {};

const items = [
  { id: 1, name: "500 บอร์ดขึ้นไป" },
  { id: 2, name: "250 ถึง 499 บอร์ด" },
  { id: 3, name: "100 ถึง 249 บอร์ด" },
  { id: 4, name: "0 ถึง 99 บอร์ด" },
];

export default function Details({}: Props) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div className="flex items-center gap-2" key={index}>
          <span
            className={`flex ${
              item.id == 1
                ? "w-8 h-8 border border-white rounded-lg bg-primary"
                : item.id == 2
                ? "w-8 h-8 border border-white rounded-lg bg-primary opacity-60"
                : item.id == 3
                ? "w-8 h-8 border border-white rounded-lg bg-primary opacity-40"
                : "w-8 h-8 border border-white rounded-lg bg-primary opacity-20"
            }`}
            key={index}
          ></span>
          {item.name}
        </div>
      ))}
    </div>
  );
}
