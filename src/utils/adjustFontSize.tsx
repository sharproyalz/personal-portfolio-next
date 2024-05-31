import React from "react";

type Props = {
  children: React.ReactNode;
};

export function AdjustFontSize({ children }: Props) {
  return <div className="font-bold">{children}</div>;
}
