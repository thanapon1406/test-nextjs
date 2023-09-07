import React from "react";

type Props = {
  label: string;
  className: string;
};

export default function Button({ label, className }: Props) {
  return <button className={className}>{label}</button>;
}
