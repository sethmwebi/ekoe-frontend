"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  if (theme === "light") {
    return (
      <span title="Enable light theme">
        <MoonIcon className="cursor-pointer" onClick={() => setTheme("dark")} />
      </span>
    );
  }

  return (
    <span title="Enable dark theme">
      <SunIcon className="cursor-pointer" onClick={() => setTheme("light")} />
    </span>
  );
}
