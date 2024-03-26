import React, { ReactNode } from "react";
import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  className: any;
  value?: number;
  max?: number;
  id?:string
};

export default function ProgressBar({
  className,
  value,
  max,
}: ProgressBarProps) {
  return <Progress value={value} className={className} max={max} />;
}
