import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex px-8 py-4 flex-col gap-4">
      <div id="line" className="line-footer"></div>
      <div className="flex justify-between items-center gap-4 text-gray">
        <p className="text-base font-normal">Version 1.00</p>
        <p className="text-base font-normal">
          © 2022 AXONS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
