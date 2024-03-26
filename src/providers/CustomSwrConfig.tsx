"use client";
import React from "react";
import { SWRConfig } from "swr";

type childrenProps = React.PropsWithChildren<{}>;

const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());

  
export default function CustomSwrConfig({ children }: childrenProps) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
