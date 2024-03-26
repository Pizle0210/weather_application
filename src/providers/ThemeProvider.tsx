"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import GlobalContextProvider from "./globalContext";
export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </NextThemesProvider>
  );
}

